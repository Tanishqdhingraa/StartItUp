import express from "express";
import { createInvestor, getInvestors } from "../controllers/investorController.js";

const router = express.Router();

router.post("/", createInvestor);   // Add new investor
router.get("/", getInvestors);      // Get all investors

export default router;
