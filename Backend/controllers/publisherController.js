// controllers/publisherController.js
import Publisher from "../models/Publisher.js";
import { publisherSchema, multiplePublisherSchema } from "../validations/publisherValidation.js";

// ⭐ POST - Add Single or Multiple Publishers
export const addPublisher = async (req, res) => {
  try {
    const data = req.body;

    // Check if multiple objects
    if (Array.isArray(data)) {
      const { error } = multiplePublisherSchema.validate(data);
      if (error) return res.status(400).json({ error: error.details[0].message });

      await Publisher.insertMany(data);
      return res.json({ success: true, message: "Multiple publishers added!" });
    }

    // Validate single publisher
    const { error } = publisherSchema.validate(data);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const newPublisher = new Publisher(data);
    await newPublisher.save();

    res.json({ success: true, message: "Publisher added!" });

  } catch (err) {
    res.status(500).json({ error: "Error saving publisher" });
  }
};


// ⭐ GET - Fetch All Publishers
export const getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publisher.find().sort({ date: -1 });
    res.json(publishers);
  } catch (err) {
    res.status(500).json({ error: "Error fetching publishers" });
  }
};
