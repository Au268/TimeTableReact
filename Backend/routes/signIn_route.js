const express = require("express");
const app = express();

const router = express.Router();
const cookie = require("cookie-parser");

app.use(cookie());


const { adminSignin } = require("../controllers/signIn_cont");

// const cr_signInController = require("../controller/signIn_cont").crSignin;

const cr_signUpController = require("../controllers/signIn_cont").crSignup;

// router.get("/admin",(req,res)=>{
//     if(req.cookies.token){
//         res.redirect("/timetable/admin");
//     }
//     else{
//         res.render("admin-login");
//     }

// });
// router.get("/cr",(req,res)=>{
//     if(req.session.crData){
//         res.redirect("/timetable/student");
//     }else{
//         res.render("crSignin");
//     }

// });

// router.get("/newcr",(req,res)=>{
//     res.render("crSignup",{globalCode:null});
// });


// router.post("/cr",cr_signInController);
router.post("/newcr",cr_signUpController);
router.post("/admin",adminSignin);


module.exports = router;