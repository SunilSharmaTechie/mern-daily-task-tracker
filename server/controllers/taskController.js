import asyncHandler from "express-async-handler";
import Task from "../models/Task.js";

// Create a new task (protected route - req.user is set by authentication middleware)
export const createTask = asyncHandler(async (req, res) => {
  const { title, description, details } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error("Title and description are required");
  }

  // Use req.user._id (set by the auth middleware) to associate the task with the logged-in user
  const task = await Task.create({
    title,
    description,
    details,
    user: req.user._id,
  });

  res.status(201).json(task);
});

// Retrieve tasks only for the logged-in user
export const getTasks = asyncHandler(async (req, res) => {
  // Filter tasks by the user ID (from req.user)
  const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json(tasks);
});

// Retrieve a single task by its slug and ensure it belongs to the logged-in user
export const getTaskBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const task = await Task.findOne({ slug, user: req.user._id });

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  res.status(200).json(task);
});
