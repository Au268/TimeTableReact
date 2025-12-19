require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const user = require("../model/user");
const cr = require("../model/crData");
const bcrypt = require("bcrypt");


const transporter = require("../transporter");
const sendCode = (async () => {
  const info = await transporter.sendMail({
    from: 'ubaid.sgd321@gmail.com',
    to: global.emailToSendCode,
    subject: "Account Verification Code",
   text: `
        Dear User,

        Thank you for registering with the Department of Software Engineering, University of Sargodha.

        To verify your account, please use the following verification code:

         ${global.code}

        This code is valid for the next 10 minutes.
        If you did not initiate this request, please ignore this email.

        Best regards,
        Department of Software Engineering
        University of Sargodha
    `
  });

  console.log("Message sent:", info.messageId);
});



const crSignin = async(req,res)=>{
    const {rollno,password} = req.body;
    const crFound = await cr.findOne({rollno});
    let age = 2*60*60*1000
    if(crFound && await bcrypt.compare(password,crFound.password)){
        if(crFound.approved){
            const token = jwt.sign({
                rollno:rollno
                },
                process.env.privateKey,
                {
                    expiresIn:"2d"
                });

                res.cookie("token",token,{
                    httpOnly:true,
                    secure: true,
                    maxAge:age,
                    sameSite: "none"
                });

            res.json({
                status:"success",
                approved:true
            })
            
        }else{
            res.json({
                status:"success",
                approved:false
            })
        }
        
    }else{
        res.json({
            status:"failure"
        })
    }

}

const crSignup = async(req,res)=>{
    let {name,rollno,type,semester,email,password,code} = req.body;
    rollno = rollno.toLowerCase();
    if(code === ""){
    const crFound = await cr.findOne({rollno});

        if(crFound){
                const comparedPassword = await bcrypt.compare(password,crFound.password)
                if(!comparedPassword){
                    return res.json({
                    status:"invalid"
                })
                }
                else if(crFound.approved === false){
                return res.json({
                    status:"failure",
                    found:true,
                    approved:false,
                    code:null
                })
            }else if(crFound.approved === true){
                return res.json({
                    status:"failure",
                    found:true,
                    approved:true,
                    code:null
        })
        }
        }
        else{
        global.emailToSendCode = email;
        global.code = Math.floor(1000 + Math.random() * 9000);
        sendCode();
        return res.json({
            status:"failure",
            found:false,
            approved:false,
            code:global.code
        })
        }
    }
    else if(code == global.code){
        
        const encryptedPassword = await bcrypt.hash(password,10);
        const newcr = await cr.insertOne({
            name,
            rollno,
            type,
            semester,
            email,
            password:encryptedPassword,
            approved:false
        })
        global.code = null;
        return res.json({
            status:"success",
            found:false,
            approved:false,
            code:null
        })
    }
}



const adminSignin = async(req,res)=>{
    const {username,password,remember} = req.body;
    console.log("Api fetched")
    let age = 0;
    if(remember==="true"){
        age = 24*60*60*1000 
    }
    else{
        age = 2*60*60*1000  
    }
    let matchedUser = null;
    matchedUser = await user.find({
        username:username,
        password:password
    });
    if(matchedUser.length>0){
         const token = jwt.sign({
        username:username
        },
        process.env.privateKey,
        {
            expiresIn:"2d"
        });

        res.cookie("token",token,{
            httpOnly:true,
            secure: true,
            maxAge:age,
            sameSite: "none"
        });
        res.json({
            status:"success"
        })

        
    }
    else{
        res.json({
            status:"failed"
        })
    }


}

module.exports = {adminSignin,crSignup,crSignin};