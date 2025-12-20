const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


const lectures = require("../model/lectures");
const roomNumber = require("../model/roomNumber");



const processTimetable = async(req,res)=>{
    const {day} = req.body;
    const room = await roomNumber.find({});
    const lect = await lectures.find({day});
    let timetableData = {
        lect,
        room
    }
    res.json({
        status:"success",
        data:timetableData
    });
}

module.exports = processTimetable;

