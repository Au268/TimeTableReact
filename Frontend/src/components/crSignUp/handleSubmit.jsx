import React from "react";
import CrSignup from '../../api/crSignupApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function HandleSubmit(setShowCode,data,navigate){

    try {
            const result = await CrSignup(data)
            if(result.status === "failure"){
              if(result.code){
                setShowCode(true);
                }else if(result.approved === false){
                  toast.info("User request has already been submitted,Please Wait",{
                  theme:"colored"
                });
                }else if(result.approved === true){
                  toast.warning("User is already registered, Please Sign in",{
                    theme:"colored"
                  })

                  setTimeout(()=>{
                    navigate("/login/cr");
                  },3600)
            
              }
            }else if(result.status === "success"){
              toast.success("User successfully Signed up",{
                theme:"colored"
              })
              setTimeout(()=>{
                    navigate("/login/cr");
                  },3600)
            }else if(result.status === "invalid"){
              toast.error("Invalid Credentials",{
                theme:"colored"
              })
            }
          } catch (error) {
            alert("Error Occurred",error.message)
          }
}