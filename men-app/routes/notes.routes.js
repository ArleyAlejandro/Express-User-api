import express from "express";
import { createNote, listNote, updateNote, deleteNote } from "../controllers/note.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/createNote", verifyToken, createNote);
router.post("/listNote", verifyToken, listNote);
router.post("/updateNote", verifyToken, updateNote);
router.post("/deleteNote", verifyToken, deleteNote);

export default router;