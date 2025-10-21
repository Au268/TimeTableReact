const cookie = require("cookie-parser");
const express = require("express");
const app = express();
app.use(cookie());

const logoutAdmin = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly:true,
      secure: true,
      sameSite: "none"
    });
    res.json({ status: "success" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ status: "failed" });
  }
};

module.exports = logoutAdmin;