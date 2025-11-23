import express from "express";
import { loginuser } from "../controllers/LoginController.js";

const router = express.Router();

router.post("/login", loginuser);

export default router;
