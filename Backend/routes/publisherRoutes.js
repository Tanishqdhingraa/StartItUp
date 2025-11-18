// routes/publisherRoutes.js
import express from 'express';
import Publisher from '../models/Publisher.js';

const router = express.Router();

// POST - Save form data
router.post('/add', async (req, res) => {
  try {
    const newPublisher = new Publisher(req.body);
    await newPublisher.save();
    res.json({ success: true, message: "Publisher saved!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save" });
  }
});

// GET - Fetch all publisher data
router.get('/all', async (req, res) => {
  try {
    const publishers = await Publisher.find().sort({ date: -1 });
    res.json(publishers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
});

export default router;
