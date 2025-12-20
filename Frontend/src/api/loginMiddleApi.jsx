import React,{useEffect} from "react";
import { Navigate } from "react-router-dom";

async function loginMiddle(){
    const apiUrl = "http://localhost:8082/checkauth";
    try{
        const response = await fetch(apiUrl,{
              method: "GET",
            credentials:"include"
        });
        if(!response.ok){
            throw new Error(`HTTP error! status:${response.status}`)
        }

        const result = await response.json();
        return result
    }catch(error){
        console.error("Authentication failed:", error);
        alert("Server error");
    }
}

export default loginMiddle