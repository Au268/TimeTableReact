const express = require("express");
const router = express.Router();

const dashboard_cont = require("../controller/dashboard_cont");

router.get("/",dashboard_cont)


module.exports = router;