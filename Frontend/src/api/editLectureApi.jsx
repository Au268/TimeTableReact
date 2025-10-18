import { useEffect } from 'react';

const editLecture = async (data,fetchLectures,closePopup,setLect,setRoom,day,setError,setSuccess) => {
  const apiUrl = "http://localhost:8082/modifyLecture/edit"
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
        
          setError(result.error)
          closePopup();
          return;
        
      }
       await fetchLectures(setLect, setRoom, day);
      setSuccess("Successfully Edited Lecture")
      closePopup();
      
    
    } catch (error) {
      console.error("Error submitting data:", error);
    }
};

export default editLecture;
