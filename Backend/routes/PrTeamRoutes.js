import express from "express";
import { createPrTeam, getPrTeams } from "../controllers/PrTeamController.js";

const router = express.Router();

router.post("/prteam", createPrTeam);
router.get("/prteam", getPrTeams);

export default router;
