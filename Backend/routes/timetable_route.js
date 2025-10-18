const express = require("express");
const router = express.Router();


const studentTimetable = require("../controllers/studentTimetable_cont");
router.post("/student",studentTimetable);



// const adminTimetable = require("../controller/adminTimetable_cont.js");
// const login_mid = require("../middlewares/login_mid.js")

// router.get("/admin",login_mid,adminTimetable.showAdminTimetable);
// router.post("/admin",login_mid,adminTimetable.processTimetable);

module.exports = router;