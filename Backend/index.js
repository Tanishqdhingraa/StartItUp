import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import rateLimit from "express-rate-limit";   // <-- default import (recommended)

// Routes
import Loginroutes from "./routes/Loginroutes.js";
import PrTeamRoutes from "./routes/PrTeamRoutes.js";
import publisherRoutes from "./routes/publisherRoutes.js";
import signroutes from "./routes/Signroutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/* ----------------------------------------
   GLOBAL RATE LIMITER (normal API usage)
----------------------------------------- */

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // 15 min
  limit: 100,                 // each IP can make 100 requests per window
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});

/* ----------------------------------------
   STRICT LIMITER FOR LOGIN / SIGNUP
----------------------------------------- */

const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,   // 10 min
  limit: 5,                   // only 5 login tries in 10 minutes
  message: {
    success: false,
    error: "Too many attempts, try again later."
  },
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});

// Apply global limiter to all routes
app.use(globalLimiter);

// Apply strict limiter ONLY to auth routes
app.use("/api/login", authLimiter);
app.use("/api/signup", authLimiter);

/* ----------------------------------------
               ROUTES
----------------------------------------- */

app.use("/api", publisherRoutes);
app.use("/api", PrTeamRoutes);
app.use("/api", Loginroutes);
app.use("/api", signroutes);

app.get("/", (req, res) => {
  res.send("Hello World my brotehr ");
});

/* ----------------------------------------
          MONGO CONNECTION
----------------------------------------- */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
