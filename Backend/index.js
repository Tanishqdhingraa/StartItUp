import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Loginroutes from "./routes/Loginroutes.js";
import PrTeamRoutes from "./routes/PrTeamRoutes.js";
import publisherRoutes from "./routes/publisherRoutes.js";
import signroutes from "./routes/Signroutes.js";


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", publisherRoutes);
app.use("/api", PrTeamRoutes);
app.use("/api", Loginroutes);
app.use("/api", signroutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
