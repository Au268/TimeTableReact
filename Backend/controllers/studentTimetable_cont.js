const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json())


const lectures = require("../model/lectures");
const roomNumbers = require("../model/roomNumber");





const processTimetable = async(req,res)=>{
    const {day,semester,type} = req.body;
    const room = await roomNumbers.find({});
        
    const lect = await lectures.find({day,semester,type});
    let timetableData = {
        lect,
        room
    }
    res.json({
        status:"success",
        data:timetableData
    })
    
}


module.exports = processTimetable;

