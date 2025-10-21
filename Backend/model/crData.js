const mongoose = require("mongoose");
const validator = require("validator");

const crSchema = new mongoose.Schema({
    name:String,
    rollno:String,
    type:String,
    semester:Number,
    email:{
        type:String,
        validate:{
            validator:(value)=>{
                return validator.isEmail(value);
            }
        }
    },
    password:String,
    approved:Boolean
});

const crModel = new mongoose.model("cr",crSchema);

module.exports = crModel;