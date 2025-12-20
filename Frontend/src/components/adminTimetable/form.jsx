import React, { useEffect, useState } from 'react'
import fetchLectures from '../../api/fetchAdminLectureApi';
const Form = ({setLect,setRoom,day,setDay}) => {
    
      useEffect(() => {
    fetchLectures(setLect, setRoom, day);
  });

  const handleChange=(e)=>{
    setDay(e.target.value)
  }
  return (
    <form>
      <div className="mb-6">
        <label htmlFor="daySelect" className="mr-2 font-medium text-gray-700">Select Day:</label>
        <select id="daySelect" name="day" className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary-500)]" onChange={handleChange}>
          <option value="">
            --Select Day--
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
    </form>
     
  )
}

export default Form;