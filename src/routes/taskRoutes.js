import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createTask, getMyTasks, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", protect, createTask);
router.get("/", protect, getMyTasks);
router.delete("/:id", protect, deleteTask);

export default router;