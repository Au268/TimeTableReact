const express = require("express");


const router = express.Router();


const logout_cont = require("../controllers/logout_cont");



router.get("/admin",logout_cont);

module.exports = router;