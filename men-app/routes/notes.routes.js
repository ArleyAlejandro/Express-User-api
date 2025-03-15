import express from "express";
import { createNote } from "../controllers/note.controller.js";

const router = express.Router();

router.post("/createNote", createNote);

export default router;