import React from "react";
import CrSignin from "../../api/crSigninApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function HandleSignInSubmit(data) {
    try {
        const result = await CrSignin(data);
        if(result.status==="success"){
            if(result.approved === true){
                toast.success("🔓Access granted — you're successfully logged in.",{
                    theme:"colored"
                })
            }else{
                toast.info("⚙️ We're processing your request — hang tight!",{
                    theme:"colored"
                })
            }
        }else{
            toast.error("Oops! That didn't match our records. Double-check your login details and try again.",{
                    theme:"colored"
                })
        }
    } catch (error) {
        alert("Server error")
    }
}