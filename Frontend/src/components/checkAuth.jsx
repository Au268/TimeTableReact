import React,{useEffect} from "react";
import { replace, useNavigate } from "react-router-dom";
import loginMiddle from "../api/loginMiddleApi";

export default function IsAuthenticated({children}){
    
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        const check = async ()=>{
            try {
                 let userIsAuthenticated = await loginMiddle();
                if(!userIsAuthenticated.authentication){
                navigate("/login/admin",{replace:true})
            }
            } catch (error) {
                 console.error("Error checking auth:", error);
                  navigate("/login/admin");
            }
        }
        check();
       
    },[navigate])
    
    return children;
}