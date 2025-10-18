

const lectures = require("../model/lectures");


const deleteClass = async(req,res)=>{
    const {data} = req.body;
    const lect = await lectures.findOneAndDelete({_id:data.lectureId});
    console.log("Api Fetched");
    
    res.json({
        status:"success"
    })
}

module.exports = deleteClass;

