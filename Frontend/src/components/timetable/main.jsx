import React from 'react'

const Main = () => {
  return (
     <main className="max-w-6xl mx-auto px-4 py-6">


    <form action="/timetable/student" method="post" className="mb-6">
      <div className="flex flex-col sm:flex-col items-center gap-4 p-6 bg-[var(--primary-50)] rounded-md shadow-sm">
        <div className="flex flex-wrap justify-center items-center gap-16">
          <div>
            <label for="daySelect" className="mr-2 font-medium text-gray-700">Select Day:</label>
            <select id="daySelect" name="day" className="px-4 py-2 min-w-[160px] border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-500)]"
               required>
              <option value="" 
            //   <%=selectedDay==="none" ?"selected":"" %>
              >
                --Day--
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
            //   <%=selectedDay==="thursday" ?"selected":"" %>
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

          <div>
            <label for="semesterSelect" className="mr-2 font-medium text-gray-700">Select Semester:</label>
            <select id="semesterSelect" name="semester"
              className="px-4 py-2 min-w-[160px] border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-500)]" required>
              <option value="" 
            //   <%=selectedSemester==0?"selected":"" %>
              >
                --Semester--
              </option>
              {/* <% for (let i=1; i <=8; i++) { %> */}
                <option value="<%= i %>" 
                // <%=selectedSemester==i?"selected":"" %>
                >
                {/* <%= i %> */}
                </option>
                {/* <% } %> */}
            </select>
          </div>
          <div>
            <label for="typeSelect" className="mr-2 font-medium text-gray-700">Select Type:</label>
            <select id="typeSelect" name="type"
              className="px-4 py-2 min-w-[160px] border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-500)]" required>
              <option value="" 
            //   <%=selectedType==="none" ?"selected":"" %>
              >
                --Type--
              </option>
              <option value="R" 
            //   <%=selectedType==="R" ?"selected":"" %>
              >
                Regular
              </option>
              <option value="SS1" 
            //   <%=selectedType==="SS1" ?"selected":"" %>
              >
                Self Support - I
              </option>
              <option value="SS2" 
            //   <%=selectedType==="SS2" ?"selected":"" %>
              >
                Self Support - II
              </option>

            </select>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button type="submit"
            className="inline-flex justify-center items-center gap-2 rounded-lg px-6 py-2.5 bg-[var(--primary-600)] text-white font-medium hover:bg-[var(--primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-50)]">
            View Schedule
          </button>
        </div>

      </div>
    </form>

     {/* Day Selector  */}



     {/* Timetable  */}
    {/* <% if(show){ %> */}
      <div className="overflow-x-auto  max-h-[80vh]">
        <table className="w-full border-collapse bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-xs sm:text-sm">
          <thead className="bg-[var(--primary-600)] text-white sticky top-0">
            <tr>
              <th className="px-2 sm:px-4 py-2 border sticky top-0">Room / Time</th>
              <th colspan="3" className="px-2 sm:px-4 py-2 border sticky top-0">8 - 9:30</th>
              <th colspan="3" className="px-2 sm:px-4 py-2 border sticky top-0">9:30 - 11</th>
              <th colspan="3" className="px-2 sm:px-4 py-2 border sticky top-0">11 - 12:30</th>
              <th colspan="3" className="px-2 sm:px-4 py-2 border sticky top-0">12:30 - 2</th>
              <th colspan="3" className="px-2 sm:px-4 py-2 border sticky top-0">2 - 3:30</th>
              <th colspan="3" className="px-2 sm:px-4 py-2 border sticky top-0">3:30 - 5</th>
              <th colspan="2" className="px-2 sm:px-4 py-2 border sticky top-0">5:00 - 6:00</th>
            </tr>
          </thead>
          <tbody>
            {/* <% for(let number=1;number<=total;number++){ %> */}
              <tr className="hover:bg-gray-50 text-xs sm:text-sm">
                {/* <% const specificRoom=room.find(rm=> rm.index === number) %> */}
                
                  <td className="border border-gray-200 px-2 sm:px-3 py-2 font-medium">
                    {/* <%= specificRoom.name %> */}
                  </td>
                  {/* <% for(let time=8,i=0;i<20;time+=0.5,i++){ %> */}


                    {/* <% const lecture=lect.find(lec=> lec.time === time && lec.roomNumber===specificRoom.name &&
                      lec.semester == selectedSemester && lec.type.includes(selectedType)) %> */}

                      {/* <% if(lecture){ %> */}


                        <td colspan="<%= lecture.slots%>" className="border border-gray-200 px-2 sm:px-3 py-2 font-medium text-center">
                          {/* <%= lecture.subjectName %> */}
                            <br/>
                            <span className="text-gray-500 text-[0.65rem] sm:text-xs">
                              {/* <%= lecture.teacherName %> */}
                            </span>
                            <br/>

                        </td>
                        {/* <% i+= lecture.slots-1;time+=lecture.slots-1 %>
                        <% }else{ %> */}
                          <td colspan="1" className="border px-2 sm:px-3 py-2 bg-gray-100 border-dashed text-gray-400 text-center">
                            
                          </td>
                          {/* <% } %> */}
                            {/* </td> */}
                            {/* <% } %> */}
                
                  
              </tr>
              {/* <% } %> */}


          </tbody>

        </table>
        {/* <% } %> */}
      </div>
  </main>
  )
}

export default Main