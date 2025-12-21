import React, { useState } from 'react'
import deleteLecture from '../../api/deleteLectureApi';


const Delete = ({ lec, closePopup, setLect, setRoom, day, setSuccess }) => {
  const startTime = `${(Math.floor(lec.time[0]) % 12) || 12}:${lec.time[0] % 1 ? '30' : '00'}`;

  let endTimeVal = lec.time[0] + lec.slots * 0.5;
  const endTime = `${(Math.floor(endTimeVal) % 12) || 12}:${endTimeVal % 1 ? '30' : '00'}`;


  const [data, setData] = useState({
    lectureId: lec._id
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteLecture(data, closePopup, setLect, setRoom, day, setSuccess)
  }


  return (
    <div className=" flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-[0_4px_15px_rgba(0,151,136,0.15)] hover:shadow-[0_6px_18px_rgba(0,151,136,0.25)] transition-shadow duration-300">

        <h2 className="text-xl font-semibold text-center text-red-600 mb-1">Confirm Deletion</h2>
        <div className="h-0.5 w-16 bg-red-500 mx-auto mb-6"></div>


        <div className="text-gray-700 space-y-2">
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium">Course:</span>
            <span>
              {lec.subjectName}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium">Instructor:</span>
            <span>
              {lec.teacherName}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium">Semester:</span>
            <span>
              {lec.semester}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium">Type:</span>
            <span>
              {lec.type.map((lec => {
                return (lec === "R" ? "Regular," : lec === "SS1" ? "Self Support - I," : lec === "SS2" ? "Self Support - II" : "")
              }))}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium">Day:</span>
            <span>
              {lec.day}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium">Time:</span>
            <span>
              {startTime} - {endTime}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Room:</span>
            <span>
              {lec.roomNumber}
            </span>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-6">Are you sure you want to delete this className?</p>

        <div className="flex justify-center gap-3 mt-6">

          <form onSubmit={handleSubmit}>
            <button type="submit"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200">
              Delete
            </button>
          </form>
          <button onClick={closePopup}
            className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200">
            Cancel
          </button>

        </div>

      </div>
    </div>
  )
}

export default Delete;