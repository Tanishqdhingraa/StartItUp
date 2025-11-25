import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";



// Routes
import Loginroutes from "./routes/Loginroutes.js";
import PrTeamRoutes from "./routes/PrTeamRoutes.js";
import publisherRoutes from "./routes/publisherRoutes.js";
import signroutes from "./routes/Signroutes.js";
import investorRoutes from "./routes/investorRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

/* ----------------------------------------
               ROUTES
----------------------------------------- */

// Auth routes (login + signup)
app.use("/api/login", Loginroutes);
app.use("/api/signup", signroutes);

// Other routes
app.use("/api/publisher", publisherRoutes);
app.use("/api/prteam", PrTeamRoutes);
app.use("/api/investors", investorRoutes);

// Root test route
app.get("/", (req, res) => {
  res.send("Hello World my brother");
});

/* ----------------------------------------
          MONGO CONNECTION
----------------------------------------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
