import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/User.js";

// Local Strategy (email/password)
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user)
          return done(null, false, { message: "Incorrect email or password" });
        if (!user.password)
          return done(null, false, {
            message: "Use social login for this account",
          });
        const isMatch = await user.matchPassword(password);
        if (!isMatch)
          return done(null, false, { message: "Incorrect email or password" });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Optional: Serialize/deserialize for session support (if needed).
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
