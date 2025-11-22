import express from "express";
import { createPrTeam, getPrTeams } from "../controllers/PrTeamController.js";

const router = express.Router();

router.post("/", createPrTeam);
router.get("/", getPrTeams);

export default router;
