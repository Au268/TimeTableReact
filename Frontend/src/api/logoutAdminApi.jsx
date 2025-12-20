import React,{useEffect} from "react";
import { Navigate } from "react-router-dom";

async function logoutAdmin(){
    const apiUrl = "http://localhost:8082/logout/admin";
    try{
        const response = await fetch(apiUrl,{
              method: "GET",
            credentials:"include"
        });
        if(!response.ok){
            throw new Error(`HTTP error! status:${response.status}`)
        }

        return true;
    }catch(error){
        console.error("Authentication failed:", error);
        alert("Failed");
    }
}

export default logoutAdmin