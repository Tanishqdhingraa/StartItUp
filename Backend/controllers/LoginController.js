import bcrypt from "bcryptjs";
import Signup from "../models/Sign.js";

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
