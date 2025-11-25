import Investor from "../models/Investor.js";

// CREATE Investor
export const createInvestor = async (req, res) => {
  try {
    const investor = await Investor.create(req.body);
    res.json({
      success: true,
      data: investor
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET All Investors
export const getInvestors = async (req, res) => {
  try {
    const investors = await Investor.find();
    res.json({
      success: true,
      data: investors
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
