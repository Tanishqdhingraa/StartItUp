// routes/publisherRoutes.js
import express from "express";
import { addPublisher, getAllPublishers } from "../controllers/publisherController.js";

const router = express.Router();

// Add Single / Multiple publishers
router.post("/publisher/add", addPublisher);

// Fetch All
router.get("/publisher/all", getAllPublishers);

export default router;
