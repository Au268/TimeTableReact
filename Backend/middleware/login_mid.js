require("dotenv").config();

const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const express = require("express");
const app = express();
app.use(cookie());

const login_middleware = (req,res)=>{
    const token = req.cookies?.token;
    console.log("Api Called")
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
            return res.json({
            authentication:true
            })
        })

}


module.exports = login_middleware;