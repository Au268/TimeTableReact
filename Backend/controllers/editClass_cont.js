const lectures = require("../model/lectures");
const roomNumber = require("../model/roomNumber");
const room = require("../model/roomNumber");


const editClass = async(req,res)=>{
    const {data} = req.body;

    let slot = parseFloat(data.duration)/30;

    let timeToCompare = [];
    for(let i=0; i<slot; i++){
        timeToCompare.push(parseFloat(data.time) + 0.5 * i);
    }
        const lectFound = await lectures.find({roomNumber:data.roomNum, time: { $in: timeToCompare },day:data.day,_id: { $ne: data.id }});
        if(lectFound.length > 0){

            return res.json({
                status:"failed",
                error:"Clash Found"
            });        
    }
    
    else{
        let slots = data.duration/30;
        const newLecture = await lectures.findOneAndUpdate({
        _id:data.id
        },{
            $set:{subjectName:data.subjectName,
            teacherName:data.teacherName,
            time:data.time,
            roomNumber:data.roomNum,
            day:data.day,
            semester:data.semester,
            type:data.type,
            duration:data.duration,
            slots
        }
    })
    res.json({
                status:"success",
                updated:true
            });
    }
}



module.exports = editClass;