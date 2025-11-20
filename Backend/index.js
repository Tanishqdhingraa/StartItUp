import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import publisherRoutes from "./routes/publisherRoutes.js";
import investorRoutes from "./routes/investorRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // ⬅ MUST come BEFORE routes

// Routes
app.use("/publisher", publisherRoutes);
app.use("/investors", investorRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server running on port ${port}`));
