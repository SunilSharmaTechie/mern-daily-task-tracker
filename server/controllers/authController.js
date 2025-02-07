import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please provide name, email, and password.");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400);
      throw new Error("User already exists.");
    }
    const user = await User.create({ name, email, password });
    res.status(201).json({
      token: generateToken(user),
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401);
      throw new Error("Authentication failed");
    }
    res.json({
      token: generateToken(req.user),
      user: { id: req.user._id, name: req.user.name, email: req.user.email },
    });
  } catch (error) {
    next(error);
  }
};

export const socialAuthCallback = (req, res) => {
  const token = generateToken(req.user);
  res.send(`
    <html>
      <body>
        <script>
          localStorage.setItem('token', '${token}');
          window.location.href = '/';
        </script>
        <p>Login successful! Redirecting...</p>
      </body>
    </html>
  `);
};
