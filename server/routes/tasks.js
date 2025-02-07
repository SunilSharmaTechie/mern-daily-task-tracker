import express from "express";
import {
  createTask,
  getTasks,
  getTaskBySlug,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     description: Creates a new task using the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: "New Task"
 *               description:
 *                 type: string
 *                 example: "Details of the new task"
 *     responses:
 *       201:
 *         description: Task created successfully.
 *       400:
 *         description: Invalid input provided.
 */
router.post("/", protect, createTask);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Retrieve all tasks
 *     description: Retrieves a list of all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 */
router.get("/", protect, getTasks);

/**
 * @swagger
 * /api/tasks/{slug}:
 *   get:
 *     summary: Retrieve a task by slug
 *     description: Retrieves details of a task identified by its slug.
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: The slug identifier for the task.
 *     responses:
 *       200:
 *         description: Task details retrieved successfully.
 *       404:
 *         description: Task not found.
 */
router.get("/:slug", protect, getTaskBySlug);

export default router;
