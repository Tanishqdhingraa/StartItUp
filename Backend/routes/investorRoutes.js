import express from "express";
import Investor from "../models/Investor.js";

const router = express.Router();

// CREATE (POST)
router.post("/", async (req, res) => {
  try {
    const investor = await Investor.create(req.body);
    res.json(investor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ (GET)
router.get("/", async (req, res) => {
  try {
    const investors = await Investor.find();
    res.json(investors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
