const express = require("express");
const app = express();
const getCr_controller = require('../controllers/getCr_controller')
const router = express.Router();



router.get("/get",getCr_controller);


module.exports = router;