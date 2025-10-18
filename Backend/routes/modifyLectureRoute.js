const express = require("express");
const router = express.Router();
// Add Lecture
const addLecture_cont = require("../controllers/addClass_cont.js");
router.post("/add",addLecture_cont);

// Edit Lecture
const editLecture_cont = require("../controllers/editClass_cont.js")
router.post("/edit",editLecture_cont);

// Delete Lecture
const deleteLecture_cont = require("../controllers/deleteClass_cont.js");
router.post("/delete",deleteLecture_cont);

module.exports = router;