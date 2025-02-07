import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";

import tasksRouter from "./routes/tasks.js";
import authRouter from "./routes/auth.js";
import "./config/passport.js";
import { setupSwagger } from "./swagger.config.js";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
const SCHEME = process.env.SCHEME || "http";

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use("/api/auth", authRouter);
app.use("/api/tasks", tasksRouter);

// Swagger setup
setupSwagger(app);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(res.statusCode || 500).json({ message: err.message });
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server running at ${SCHEME}://${HOST}:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
