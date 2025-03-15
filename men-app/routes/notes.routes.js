import express from "express";
import { createNote } from "../controllers/note.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/createNote", verifyToken, createNote);

export default router;