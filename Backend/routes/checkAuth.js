const express = require("express");
const app = express();

const router = express.Router();
const cookie = require("cookie-parser");
app.use(cookie());
const check = require("../middleware/login_mid");

router.get("",check);



module.exports = router;