// routes/publisherRoutes.js
import express from "express";
import { addPublisher, getAllPublishers } from "../controllers/publisherController.js";

const router = express.Router();

// Add Single / Multiple publishers
router.post("/add", addPublisher);

// Fetch All
router.get("/all", getAllPublishers);

export default router;
