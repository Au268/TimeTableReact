import React from 'react'
import { useEffect,useState } from 'react'
import cors from 'cors'




const Main = ({setLect,setRoom}) => {

  const apiURL = "http://localhost:8082/timetable/student";

  const [data,setData] = useState({
    day:"",
    semester:"",
    type:""
  })

  async function handleSubmit(updatedData){
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
  }


  function handleChange (e){
    const {name,value} = e.target
    setData((prevData)=>{
      const newData = {...prevData,[name]:value}
      if (newData.day && newData.semester && newData.type) {
      handleSubmit(newData);
    }
    return newData;
    })
  }

  

  return (
     <main className="max-w-6xl mx-auto px-4 py-6">


    <form onSubmit={handleSubmit}> 
      <div className="flex flex-col sm:flex-col items-center gap-4 p-6 bg-[var(--primary-50)] rounded-md shadow-sm">
        <div className="flex flex-wrap justify-center items-center gap-16">
          <div>
            <label for="daySelect" className="mr-2 font-medium text-gray-700">Select Day:</label>
            <select id="daySelect" name="day" className="px-4 py-2 min-w-[160px] border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-500)]" value={data.day} onChange={handleChange}
               required>
              <option value="">
                --Day--
              </option>
              <option value="monday">
                Monday
              </option>
              <option value="tuesday">
                Tuesday
              </option>
              <option value="wednesday">
                Wednesday
              </option>
              <option value="thursday">
                Thursday
              </option>
              <option value="friday">
                Friday
              </option>
            </select>
          </div>

          <div>
            <label for="semesterSelect" className="mr-2 font-medium text-gray-700">Select Semester:</label>
            <select id="semesterSelect" name="semester"
              className="px-4 py-2 min-w-[160px] border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-500)]" onChange={handleChange} value={data.semester} required>
              <option value="">
                --Semester--
              </option>
               
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
            </select>
          </div>
          <div>
            <label for="typeSelect" className="mr-2 font-medium text-gray-700">Select Type:</label>
            <select id="typeSelect" name="type"
              className="px-4 py-2 min-w-[160px] border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-500)]" onChange={handleChange} value={data.type} required>
              <option value="">
                --Type--
              </option>
              <option value="R">
                Regular
              </option>
              <option value="SS1">
                Self Support - I
              </option>
              <option value="SS2">
                Self Support - II
              </option>

            </select>
          </div>
        </div>

        

      </div>
    </form>   
  </main>
  )
}

export default Main