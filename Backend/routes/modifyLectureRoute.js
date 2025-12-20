const express = require("express");
const router = express.Router();
// Add Lecture
const addLecture_cont = require("../controllers/modifyClass_cont.js").addClass
router.post("/add",addLecture_cont);

// Edit Lecture
const editLecture_cont = require("../controllers/modifyClass_cont.js").editClass
router.post("/edit",editLecture_cont);

// Delete Lecture
const deleteLecture_cont = require("../controllers/modifyClass_cont.js").deleteClass
router.post("/delete",deleteLecture_cont);

module.exports = router;