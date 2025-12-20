import { useEffect } from 'react';
import fetchLectures from './fetchAdminLectureApi';
const deleteLecture = async (data,closePopup,setLect,setRoom,day,setSuccess) => {
  const apiUrl = "http://localhost:8082/modifyLecture/delete"
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
        return(
          alert("Lecture Cannot be deleted")
        
      )
      }
       await fetchLectures(setLect, setRoom, day);
       setSuccess("Successfully Deleted Lecture")
      closePopup();
      
    
    } catch (error) {
      console.error("Error submitting data:", error);
    }
};

export default deleteLecture;
