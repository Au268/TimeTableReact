const express = require("express");
const router = express.Router();


const requestApproved = require("../controllers/requestModified.js").approveRequest
router.post("/approve",requestApproved);

const requestDeclined = require("../controllers/requestModified.js").declineRequest
router.post("/decline",requestDeclined);

module.exports = router;