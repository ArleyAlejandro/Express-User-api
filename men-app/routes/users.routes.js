import express from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/perfil", verifyToken, (req, res) => {
  res.json({ message: "Bienvenido a tu perfil", user: req.user });
});

export default router;
