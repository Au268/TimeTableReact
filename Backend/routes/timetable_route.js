const express = require("express");
const router = express.Router();


const studentTimetable = require("../controllers/studentTimetable_cont");
router.post("/student",studentTimetable);

const adminTimetable = require("../controllers/adminTimetable_cont.js");
router.post("/admin",adminTimetable);


// const login_mid = require("../middlewares/login_mid.js")

// router.get("/admin",login_mid,adminTimetable.showAdminTimetable);


module.exports = router;