import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Timetable = () => {
  return (
    // <% if(show){ %>
      <div className="overflow-x-auto max-h-[80vh]">
  <table className="w-full border-collapse bg-white rounded-lg shadow-md text-xs sm:text-sm">
    <thead className="bg-[var(--primary-600)] text-white sticky top-0">
      <tr>
        <th className="px-2 sm:px-4 py-2 border sticky top-0">Room / Time</th>
        <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">8:00 - 9:30</th>
        <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">9:30 - 11:00</th>
        <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">11:00 - 12:30</th>
        <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">12:30 - 2:00</th>
        <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">2:00 - 3:30</th>
        <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">3:30 - 5:00</th>
        <th colSpan="2" className="px-2 sm:px-4 py-2 border sticky top-0">5:00 - 6:00</th>
      </tr>
    </thead>
          <tbody>
            {/* <% for(let number=1;number<=total;number++){ %> */}
              <tr className="hover:bg-gray-50 text-xs sm:text-sm">
                {/* <% const specificRoom=room.find(rm=> rm.index === number) %> */}
                  <td className="border-1 border-gray-200 px-2 sm:px-3 py-2 font-medium">
                    {/* <%= specificRoom.name %> */}
                  </td>
                  {/* <% for(let time=8,i=1;i<21;time+=0.5,i++){ %> */}


                    {/* <% const lecture=lect.find(lec=> lec.time === time && lec.roomNumber===specificRoom.name) %> */}
                      {/* <% if(lecture){ %> */}
                        {/* <% const available = false %> */}
                        <td colSpan="<%= lecture.slots %>" className="border-1 border-gray-200 px-2 sm:px-3 py-2 font-medium text-center">
                          {/* <%= lecture.subjectName %> */}
                            <br/>
                            <span className="text-gray-400 italic text-[0.8rem] sm:text-xs mt-1 ">
                              {/* <%= lecture.teacherName %> */}
                            </span>
                            <br/>
                            <span className= "text-gray-700 text-[0.65rem] sm:text-xs px-2 py-0.5 uppercase inline-block mt-1">
                              {/* <% if(lecture.semester){ %> */}
                                {/* <%= lecture.semester %> */}
                                  {/* <% } %> */}
                            </span>
                            <span className="text-gray-700 text-[0.65rem] sm:text-xs py-0.5 uppercase inline-block mt-1">
                              {/* <% if(lecture.type.includes("R") ){ %> */}
                                Regular
                                {/* <% }if(lecture.type.includes("SS1") ){ %> */}
                                  Self Support - I
                                  {/* <% }if(lecture.type.includes("SS2") ){ %> */}
                                    Self Support - II
                                    {/* <% } %> */}
                            </span>
                            <div className="mt-1 flex justify-center gap-1">
                              <form action="/modifyLecture/delete" method="POST">
                                {/* <input name="lectureId" type="hidden"  */}
                                {/* // value="<%=lecture._id %>" */}
                                {/* > */}
                                <button
                                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded font-medium transition-colors duration-200">Delete</button>
                              </form>
                              <form action="/modifyLecture/edit" method="POST">
                                {/* <input name="day" type="hidden" 
                                // value=<%=selectedDay %>
                                >
                                <input name="lectureId" type="hidden" value="<%=lecture._id %>"> */}
                                <button
                                  className="bg-amber-400 hover:bg-amber-500 text-white text-xs px-3 py-1.5 rounded font-medium transition-colors duration-200">Edit</button>
                              </form>

                            </div>
                        </td>
                        {/* <% i+= lecture.slots-1;time += parseFloat(0.5*(lecture.slots-1)) %> */}
                        {/* <% }else{ %> */}
                          <td colSpan="1" className="border px-2 sm:px-3 py-2 bg-gray-100 border-dashed text-gray-400 text-center">
                            {/* <form action="/modifyLecture/add" method="POST">
                              <input type="hidden" name="roomNum" value="<%= specificRoom.name %>">
                              <input type="hidden" name="time" value="<%= time %>">
                              <input type="hidden" name="day" value="<%= selectedDay %>">
                              <div className="mt-1 flex justify-center gap-1"> */}
                                <Popup trigger={<button type="submit"
                                  className="bg-emerald-400 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded font-medium transition-colors duration-200">Add</button>} position='right center'>
                                    <div class="min-h-screen flex items-center justify-center px-4 py-10">
                                    <div className="w-full max-w-md glass-card p-6 sm:p-8 rounded-lg shadow-[0_4px_15px_rgba(0,151,136,0.15)] hover:shadow-[0_6px_18px_rgba(0,151,136,0.25)] transition-shadow duration-300">
    
                                        <h2 className="text-xl font-semibold text-[var(--primary-600)] mb-1 text-center">Add New Class</h2>
                                        <div className="h-0.5 w-16 bg-[var(--line-dark)] mx-auto mb-6"></div>

                                        {/* <form className="space-y-4" action="add/submit" method="post"> */}
                                          <div>
                                            <label for="courseAdd" className="block text-gray-700 font-medium mb-1">Course</label>
                                            <input type="text" id="courseAdd" required placeholder="Enter course name" name="lectureName"
                                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200"/>
                                          </div>

                                          <div>
                                            <label for="instructorAdd" className="block text-gray-700 font-medium mb-1">Instructor</label>
                                            <input type="text" id="instructorAdd" required placeholder="Enter instructor name" name="teacherName"
                                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200"/>
                                          </div>

                                          <div>
                                            <label for="semesterEdit" className="block text-gray-700 font-medium mb-1">Semester</label>

                                            <select name="semester" required id="semesterEdit" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200">
                                              {/* <option value=1>1</option>
                                              <option value=2>2</option>
                                              <option value=3>3</option>
                                              <option value=4>4</option>
                                              <option value=5>5</option>
                                              <option value=6>6</option>
                                              <option value=7>7</option>
                                              <option value=8>8</option> */}
                                            </select>
                                          </div>

                                          <div>
                                          <label for="typeEdit" className="block text-gray-700 font-medium mb-1">Type</label>

                                          <div className="flex items-center gap-2 mb-1">
                                            <input type="checkbox" id="multiple" className="accent-[var(--primary-600)] cursor-pointer"/>
                                            <span className="text-sm text-gray-600">Enable multiple selection</span>
                                          </div>

                                          <select name="type" id="typeEdit" required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200">
                                            <option value="R">Regular</option>
                                            <option value="SS1">Self Support - I</option>
                                            <option value="SS2">Self Support - II</option>
                                          </select>

                                          <p id="multiHint" className="hidden text-xs text-gray-500 mt-1">
                                            💡 Hold <b>Ctrl</b> (Windows) or <b>Cmd</b> (Mac) while clicking to select multiple options.
                                          </p>
                                        </div>

                                          <label htmlFor="duration" class="block text-gray-700 font-medium mb-1">Duration:</label>
                                          <select name="duration" required id="durationEdit" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200">
                                              {/* <option value=60>1 hour</option>
                                              <option value=90>1.5 hour</option>
                                              <option value=120>2 hour</option>
                                              <option value=150>2.5 hour</option>
                                              <option value=180>3 hour</option> */}
                                            </select>
                                          

                                           {/* Inputs from main form  */}
                                          <input type="hidden" name="roomNum" value="<%= roomNum %>"/>
                                          <input type="hidden" name="time" value="<%= time %>"/>
                                          <input type="hidden" name="day" value="<%= day %>"/>

                                          <div className="flex justify-center gap-3 mt-4">
                                            <button type="submit"
                                              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200">
                                              Save Class
                                            </button>
                                            {/* </form> */}
                                            <form action="/timetable/admin" method="POST">
                                              <input type="hidden" name="day" 
                                              // value=<%= day %>
                                              />
                                              <button type="submit"
                                              className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 font-semibold px-4 py-2 rounded-lg transition-all duration-200">
                                              Cancel
                                              </button>
                                            </form>
                                            

                                          </div>
                                        </div>
                                      </div>

                                </Popup>
                              {/* </div>
                            </form> */}

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
  );
};

export default Timetable;