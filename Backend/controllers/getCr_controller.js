const cr = require("../model/crData");

const getCr = async(req,res)=>{
    try {
        const crData = await cr.find();
        if(crData){
            return res.json({
                response:"success",
                data:crData
            })
        }
        else{
            return res.json({
                response:"failure"
            })
        } 
    } catch (error) {
        return res.json({
            response:"error",error
        })
    }
    
}

module.exports = getCr;