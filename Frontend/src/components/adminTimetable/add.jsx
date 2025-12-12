import React, { useState } from 'react'
import fetchLectures from '../../api/fetchAdminLectureApi'
import addLecture from '../../api/addLectureApi'

const Add = ({room,closePopup,setLect,setRoom,day,time,setError,setSuccess}) => {

    const [check,setCheck]=useState(false)
    const [data,setData]=useState({
        day:day || "",
        time:time || "",
        duration:"60",
        roomNum:room.name || "",
        subjectName:"",
        teacherName:"",
        semester:"1",
        type: "R",
    })


    function handleChange(e){
        const {name,value,options,multiple} = e.target;
        if (multiple) {
            const selectedValues = Array.from(options).filter(opt => opt.selected).map(opt => opt.value);
            setData(prev => ({ ...prev, [name]: selectedValues }));
        } else {
            setData(prev => ({ ...prev, [name]: value }));
        }
    }

    async function handleSubmit(e){
    e.preventDefault();
    addLecture(data,closePopup,setLect,setRoom,setError,setSuccess)
    fetchLectures(setLect, setRoom, day);
  }



    return (
    <div className=" flex items-center justify-center px-10 py-10 ">
        <div className="w-full max-w-md glass-card p-6 sm:p-8 rounded-lg shadow-[0_4px_15px_rgba(0,151,136,0.15)] hover:shadow-[0_6px_18px_rgba(0,151,136,0.25)] transition-shadow duration-300">
    
            <h2 className="text-xl font-semibold text-[var(--primary-600)] mb-1 text-center">Add New Class</h2>
            <div className="h-0.5 w-16 bg-[var(--line-dark)] mx-auto mb-6"></div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="courseAdd" className="block text-gray-700 font-medium mb-1">Course</label>
                        <input type="text" id="courseAdd" required placeholder="Enter course name" name="subjectName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200"
                        onChange={handleChange}/>
                    </div>


                    <div>
                        <label htmlFor="instructorAdd" className="block text-gray-700 font-medium mb-1">Instructor</label>
                        <input type="text" id="instructorAdd" required placeholder="Enter instructor name" name="teacherName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200"
                        onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="semesterEdit" className="block text-gray-700 font-medium mb-1">Semester</label>

                        <select name="semester" required id="semesterEdit" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.semester} onChange={handleChange}>
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
                        <label htmlFor="typeEdit" className="block text-gray-700 font-medium mb-1">Type</label>

                        <div className="flex items-center gap-2 mb-1">
                            <input type="checkbox" id="multiple" className="accent-[var(--primary-600)] cursor-pointer" onClick={()=>setCheck(prev=>!prev)}/>
                            <span className="text-sm text-gray-600">Enable multiple selection</span>
                        </div>

                        <select name="type" id="typeEdit" required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" multiple={check} value={data.type} onChange={handleChange}>
                        <option value="R">Regular</option>
                        <option value="SS1">Self Support - I</option>
                        <option value="SS2">Self Support - II</option>
                        </select>
                        {check?
                            <p id="multiHint" className="hidden text-xs text-gray-500 mt-1">
                        💡 Hold <b>Ctrl</b> (Windows) or <b>Cmd</b> (Mac) while clicking to select multiple options.
                        </p>
                        :
                            ""
                    }
                        
                    </div>

                    <label htmlFor="duration" className="block text-gray-700 font-medium mb-1">Duration:</label>
                    <select name="duration" required id="durationEdit" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-opacity-50 transition duration-200" value={data.duration} onChange={handleChange}>
                    <option value="60">1 hour</option>
                    <option value="90">1.5 hour</option>
                    <option value="120">2 hour</option>
                    <option value="150">2.5 hour</option>
                    <option value="180">3 hour</option>
                    </select>
                                          

                    

                    <div className="flex justify-center gap-3 mt-4">
                        <button type="submit"
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200">
                        Save Class
                        </button>
                        
                        
                        
                        
                       
                        <button onClick={closePopup}
                        className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 font-semibold px-4 py-2 rounded-lg transition-all duration-200">
                        Cancel
                        </button>
                        
                                            

                    </div>
                </form>
        </div>
    </div>
  )
}

export default Add;