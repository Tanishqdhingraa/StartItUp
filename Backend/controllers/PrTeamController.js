import PrTeam from "../models/PrTeam.js";

// CREATE
export const createPrTeam = async (req, res) => {
  try {
    const newEntry = new PrTeam(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL
export const getPrTeams = async (req, res) => {
  try {
    const data = await PrTeam.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
