const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//! User registration
module.exports.signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all information" });
    }
    // console.log("Email : ", email);
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ message: "User already exists" });
    }
    // secure the password
    const hash = await bcrypt.hash(password, 12);

    const newUser = await new User({ email, username, password: hash });
    const savedUser = await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, process.env.TOKEN_KEY);
    // res.cookie("token", token, { httpOnly: true });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // true if using HTTPS in production
      sameSite: "none", // allows cross-port requests
      path: "/", // ✅ make it accessible on all paths
    });

    res.send("User Registration complete");
  } catch (err) {
    console.error("Signup error:", err);
    return res
      .status(500)
      .json({ message: err.message || "Internal server error" });
  }
};

//! User Login
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all information" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect password or email" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY);
    // res.cookie("token", token, { httpOnly: true });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // true if using HTTPS in production
      sameSite: "none", // allows cross-port requests
      path: "/", // ✅ make it accessible on all paths
    });

    res.send("Login Successfull");
  } catch (err) {
    console.error("Login error:", err);
    return res
      .status(500)
      .json({ message: err.message || "Internal server error" });
  }
};

//! User Logout
module.exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful" });
};