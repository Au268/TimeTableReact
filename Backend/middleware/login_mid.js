require("dotenv").config();

const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const express = require("express");
const app = express();
app.use(cookie());

const login_middleware = (req,res)=>{
    const token = req.cookies?.token;
    if(!token){
        return res.json({
            authentication:false
        })
    }
        jwt.verify(token,process.env.privateKey,(err,decoded)=>{
            if(err){
                return res.json({
                    authentication:false
                })
            }

            req.user = decoded;
            if(req.user.roll === "Cr"){
                return res.json({
                    authentication:true,
                    role:"Cr"
                })
            }else if(req.user.roll === "Admin"){
                return res.json({
                    authentication:true,
                    role:"Admin"
                })
            }
            
        })

}


module.exports = login_middleware;