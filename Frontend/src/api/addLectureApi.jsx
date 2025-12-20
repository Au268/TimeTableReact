import { useEffect } from 'react';

import fetchLectures from './fetchAdminLectureApi';
const addLecture = async (data,closePopup,setLect,setRoom,setError,setSuccess) => {
  const apiUrl = "http://localhost:8082/modifyLecture/add"
    try {
      const response = await fetch(apiUrl,{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({data})
    });
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
      const result = await response.json();
      if(result.error){
        setError(result.error);
        closePopup();
        return
      }
      const day = data.day
      setSuccess("Successfully Added Lecture")
      closePopup()
       await fetchLectures(setLect, setRoom, day);
      
      
    
    } catch (error) {
      console.error("Error submitting data:", error);
    }
};

export default addLecture;
