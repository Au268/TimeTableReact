import React from 'react'

const Form = () => {
  return (
    
    <form
    //  action="/timetable/admin" method="POST"
    >
      <div className="mb-6">
        <label for="daySelect" className="mr-2 font-medium text-gray-700">Select Day:</label>
        <select id="daySelect" name="day"
          className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary-500)]"
        //   onchange="this.form.submit()"
          >
          <option value="" 
        //   <%=selectedDay==="none" ?"selected":"" %>
          >
            --Select Day--
          </option>
          <option value="monday" 
        //   <%=selectedDay==="monday" ?"selected":"" %>
          >
            Monday
          </option>
          <option value="tuesday" 
        //   <%=selectedDay==="tuesday" ?"selected":"" %>
          >
            Tuesday
          </option>
          <option value="wednesday" 
        //   <%=selectedDay==="wednesday" ?"selected":"" %>
          >
            Wednesday
          </option>
          <option value="thursday"
        //    <%=selectedDay==="thursday" ?"selected":"" %>
           >
            Thursday
          </option>
          <option value="friday" 
        //   <%=selectedDay==="friday" ?"selected":"" %>
          >
            Friday
          </option>
        </select>
      </div>
    </form>
    
  )
}

export default Form;