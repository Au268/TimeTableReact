import React,{useEffect} from "react";
import { Navigate } from "react-router-dom";

async function CrSignup(data){
    const apiUrl = "http://localhost:8082/login/newcr";
    try{
        const response = await fetch(apiUrl,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data),
            credentials:"include"
        });
        if(!response.ok){
            throw new Error(`HTTP error! status:${response.status}`)
        }

        const result = await response.json();
        return result
    }catch(error){
        console.error("Login failed:", error);
        alert("Server error");
    }
}

export default CrSignup