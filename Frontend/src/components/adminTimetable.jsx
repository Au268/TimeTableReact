import React, { useState,useEffect } from 'react'
import Nav from './adminTimetable/nav'
import Form from './adminTimetable/form'
import Timetable from './adminTimetable/timetable'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const AdminTimetable = () => {
  const [lect,setLect] = useState([]);
    const [room,setRoom] = useState([]);
    const [day,setDay] = useState("");
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")

     useEffect(() => {
        if (error) {
          toast.error(error,{
            theme:"dark"
          });
          const timer = setTimeout(() => setError(""), 3000);
          return () => clearTimeout(timer);
        }
      }, [error]);
      useEffect(() => {
        if (success) {
          if(success.includes("Added")){
            toast.success(success,{
            theme:"dark"
          });
          }
          else if(success.includes("Edited")){
            toast.info(success,{
            theme:"dark"
          });
          }
          else if(success.includes("Deleted")){
            toast.warning(success,{
            theme:"dark"
          });
          }
          const timer = setTimeout(() => setSuccess(""), 3000);
          return () => clearTimeout(timer);
        }
      }, [success]);


  return (
    <div>
        <Nav/>
        <div className="max-w-6xl mx-auto px-4 py-6">
            <Form setLect={setLect} setRoom={setRoom} day={day} setDay={setDay}/>
            {lect.length===0?"":
            <Timetable lect={lect} room={room} setLect={setLect} setRoom={setRoom} day={day} setError={setError} setSuccess={setSuccess}/>
            }
           
         
          <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        </div>
        
    </div>
    
  )
}

export default AdminTimetable