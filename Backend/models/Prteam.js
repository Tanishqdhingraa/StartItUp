import mongoose from "mongoose";

const PrTeamSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    serviceType: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("PrTeam", PrTeamSchema);
