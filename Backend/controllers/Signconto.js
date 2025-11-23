import bcrypt from "bcryptjs";
import Signup from "../models/Sign.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await Signup.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new Signup({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful", user: newUser });

  } catch (error) {
    console.log("Signup error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
