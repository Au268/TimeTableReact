require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookie());

const PORT = process.env.PORT || 5000;


const connectDB = require("./connectDB");
connectDB();


const timetable_route = require("./routes/timetable_route.js");
app.use("/timetable",timetable_route);

const modifyLectureRoute = require("./routes/modifyLectureRoute.js");
app.use("/modifyLecture",modifyLectureRoute);

const signIn_route = require("./routes/signIn_route");
app.use("/login",signIn_route);

const checkAuth = require("./routes/checkAuth.js")
app.use("/checkauth",checkAuth);

const logout_route = require("./routes/logout_route");
app.use("/logout",logout_route);

app.listen(PORT,()=>{
    console.log("Server is running...");
})



