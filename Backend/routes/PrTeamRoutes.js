import express from "express";
import { createPrTeam, getPrTeams } from "../controllers/PrTeamController.js";

const router = express.Router();

router.post("/Prteam", createPrTeam);
router.get("/Prteam", getPrTeams);

export default router;
