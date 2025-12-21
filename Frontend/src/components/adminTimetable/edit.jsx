import React, { useState } from 'react'
import fetchLectures from '../../api/fetchAdminLectureApi';
import editLecture from '../../api/editLectureApi';

const Edit = ({ lec, room, closePopup, setLect, setRoom, day, setError, setSuccess }) => {

  const [data, setData] = useState({
    day: lec.day,
    time: lec.time,
    duration: lec.duration,
    roomNum: lec.roomNumber,
    subjectName: lec.subjectName,
    teacherName: lec.teacherName,
    semester: lec.semester,
    type: lec.type,
    id: lec._id
  })
  const [check, setCheck] = useState(lec.type.length > 1 ? true : false)


  const handleChange = (e) => {
    const { name, value, options, multiple } = e.target;
    if (multiple) {
      const selectedValues = Array.from(options).filter(opt => opt.selected).map(opt => opt.value);
      setData(prev => ({ ...prev, [name]: selectedValues }));
    } else {
      setData(prev => ({ ...prev, [name]: value }));
    }
  };


  async function handleSubmit(e) {
    e.preventDefault();
    editLecture(data, fetchLectures, closePopup, setLect, setRoom, day, setError, setSuccess)
  }



  return (
    <form className='flex justify-center content-center py-10 rounded-2xl max-h-[700px] overflow-auto' onSubmit={handleSubmit}>

      <div className="w-full max-w-md glass-card p-6 sm:p-8 rounded-2xl ">

        <h2 className="text-xl font-semibold text-[var(--primary-600)] mb-1 text-center">Edit className Details</h2>
        <div className="h-0.5 w-16 bg-[var(--line-dark)] mx-auto mb-6"></div>


        <div>
          <label for="dayEdit" className="block text-gray-700 font-medium mb-1">Day</label>
          <select id="dayEdit" name="day" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.day} onChange={handleChange}>
            <option value="monday">
              Monday
            </option>
            <option
              value="tuesday">
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
          <label for="timeEdit" className="block text-gray-700 font-medium mb-1">Time Slot</label>
          <select id="timeEdit" name="time" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.time[0]} onChange={handleChange}>

            {(() => {
              let slots = [];
              const timeSlots = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00"]
              for (let i = 8, j = 0; i < 18.5; i += 0.5, j++) {

                slots.push(
                  <option value={i} key={i}>
                    {timeSlots[j]}
                  </option>
                )
              }

              return slots;
            })()};

          </select>
        </div>
        <div>
          <label for="durationEdit" className="block text-gray-700 font-medium mb-1">Duration</label>
          <select id="durationEdit" name="duration" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.duration} onChange={handleChange}>
            <option key={60} value="60">1 hour</option>
            <option key={90} value="90">1.5 hour</option>
            <option key={120} value="120">2 hour</option>
            <option key={150} value="150">2.5 hour</option>
            <option key={180} value="180">3 hour</option>
          </select>
        </div>

        <div>
          <label for="roomEdit" className="block text-gray-700 font-medium mb-1">Room</label>
          <select id="roomEdit" name="roomNum" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.roomNum} onChange={handleChange}>
            {room.map((rm, index) => {
              return (
                <option key={index} value={rm.name}>
                  {rm.name}
                </option>
              )
            })}
          </select>
        </div>

        <div>
          <label for="courseEdit" className="block text-gray-700 font-medium mb-1">Course</label>
          <input type="text" name="subjectName" id="courseEdit"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.subjectName} onChange={handleChange} />
        </div>

        <div>
          <label for="instructorEdit" className="block text-gray-700 font-medium mb-1">Instructor</label>
          <input type="text" id="instructorEdit" name="teacherName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.teacherName} onChange={handleChange} />
        </div>
        <div>
          <label for="semesterEdit" className="block text-gray-700 font-medium mb-1">Semester</label>
          <select id="semesterEdit" name="semester" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.semester} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div>
          <label for="typeEdit" className="block text-gray-700 font-medium mb-1">Type</label>

          <div className="flex items-center gap-2 mb-1">
            <input type="checkbox" id="multiple" className="accent-[var(--primary-600)] cursor-pointer" checked={check} onChange={() => setCheck(prev => !prev)} />
            <span className="text-sm text-gray-600">Enable multiple selection</span>
          </div>

          <select name="type" id="typeEdit"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" multiple={check} value={data.type} onChange={handleChange}>
            <option value="R">Regular</option>
            <option value="SS1">Self Support - I</option>
            <option value="SS2">Self Support - II</option>
          </select>

          {check ?
            <p id="multiHint" className=" text-xs text-gray-500 mt-1">
              💡 Hold <b>Ctrl</b> (Windows) or <b>Cmd</b> (Mac) while clicking to select multiple options.
            </p>
            :
            ""
          }

        </div>
        <div className="flex justify-center gap-3 mt-4">
          <button type="submit"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200">
            Save Changes
          </button>


          <button onClick={closePopup}
            className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 font-semibold px-4 py-2 rounded-lg transition-all duration-200">
            Cancel
          </button>



        </div>
      </div>
    </form>

  )
}

export default Edit;