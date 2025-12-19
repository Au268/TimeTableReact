const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
    subjectName:String,
    teacherName:String,
    time:Number,
    roomNumber:String,
    day:String,
    semester:Number,
    type:[String],
    duration:Number,
    slots:Number,
    reserved:Boolean
});

const lectureModel = new mongoose.model("lecture",lectureSchema);

module.exports = lectureModel;