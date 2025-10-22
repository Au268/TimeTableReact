const express = require("express");
const app = express();

const router = express.Router();
const cookie = require("cookie-parser");

app.use(cookie());


const { adminSignin } = require("../controllers/signIn_cont");

const cr_signInController = require("../controllers/signIn_cont").crSignin;

const cr_signUpController = require("../controllers/signIn_cont").crSignup;



router.post("/cr",cr_signInController);
router.post("/newcr",cr_signUpController);
router.post("/admin",adminSignin);


module.exports = router;