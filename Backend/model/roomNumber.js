const mongoose = require("mongoose");

const roomNumberSchema = new mongoose.Schema({
    name:"String",
    index:Number
});

const roomNumber = new mongoose.model("roomnumbers",roomNumberSchema);

module.exports = roomNumber;