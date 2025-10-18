require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;


const connectDB = require("./connectDB");
connectDB();


const timetable_route = require("./routes/timetable_route.js");
app.use("/timetable",timetable_route);

const modifyLectureRoute = require("./routes/modifyLectureRoute.js");
app.use("/modifyLecture",modifyLectureRoute);

app.listen(PORT,()=>{
    console.log("Server is running...");
})



