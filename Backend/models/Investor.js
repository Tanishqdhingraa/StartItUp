import mongoose from "mongoose";

const InvestorSchema = new mongoose.Schema({
  brandName: String,
  budget: Number,
  companyType: String,
});

export default mongoose.model("Investor", InvestorSchema);
