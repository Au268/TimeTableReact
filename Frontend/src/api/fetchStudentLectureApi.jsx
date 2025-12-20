import { useEffect } from 'react';

const fetchStudentLectures = async (updatedData,setLect,setRoom) => {
  const apiURL = "http://localhost:8082/timetable/student";
  try {
    const response = await fetch(apiURL,{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(updatedData)
    });
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
     const result = await response.json();
    
      setLect(result.data.lect || []);
      setRoom(result.data.room || []);
    
    } catch (error) {
      console.error("Error submitting data:", error);
    }
};

export default fetchStudentLectures;
