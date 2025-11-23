import express from "express";
import { signupUser } from "../controllers/Signconto.js";

const router = express.Router();

// POST /api/signup
router.post("/signup", signupUser);

export default router;
