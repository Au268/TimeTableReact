import {React,useState,useEffect} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Add from './add';
import Edit from './edit';
import Delete from './delete';
import loginMiddle from '../../api/loginMiddleApi'


const Timetable = ({lect,room,setLect,setRoom,day,setError,setSuccess}) => {
   const [searchTerm, setSearchTerm] = useState("");
   const [role,setRole] = useState("")

  useEffect(() => {
  const  getRole = async()=>{
      const result = await loginMiddle()
    setRole(result.role)
    console.log(role);
  }
  getRole()
  
}, []);




   const filteredLect = searchTerm? lect.filter(l =>
        l.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.subjectName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : lect;
  return (
      <div className="overflow-x-auto max-h-[80vh]">
        <div className="mb-4 flex justify-center mt-4">
          <input
          type="text"
          placeholder="Search by teacher name or subject name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)]"
          />
        </div>
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
          
              {room.map((rm,roomIndex)=>(
                  <tr key={roomIndex} className="hover:bg-gray-50 text-xs sm:text-sm">
                    
                  <td className="border-1 border-gray-200 px-2 sm:px-3 py-2 font-medium">
                    {rm.name}
                  </td>
                  {(()=>{
                    let cells = []
                  for(let time=8,i=0;i<20;time+=0.5,i++){
                        const lec = filteredLect.find(l => l.time == time && l.roomNumber === rm.name);
                        if(lec && lec.reserved){
                          // <td className="border px-2 sm:px-3 py-2 text-center bg-teal-50 border-teal-500 font-semibold text-teal-900"
                            cells.push(
                                <td className="border-1 bg-teal-50 border-teal-500 px-2 sm:px-3 py-2 font-semibold text-teal-900 text-center" key={i} colSpan={lec.slots}>
                                    {lec.subjectName}
                                    <br/>
                                    <span className="text-gray-400 italic text-[0.8rem] sm:text-xs mt-1 ">
                                    {lec.teacherName}
                                    </span>
                                    <br />
                                    <span className= "text-gray-700 text-[0.65rem] sm:text-xs px-2 py-0.5 inline-block mt-1">
                                    {lec.semester==1?"1st ":lec.semester==2?"2nd ":lec.semester==3?"3rd ":lec.semester==4?"4th ":lec.semester==5?"5th ":lec.semester==6?"6th ":lec.semester==7?"7th ":lec.semester==8?"8th ":""}
                                    
                                    
                                    {lec.type?lec.type.map((lec=>{
                                      return(lec==="R"?"Regular,":lec==="SS1"?"Self Support - I,":lec==="SS2"?"Self Support - II":"")
                                    })):""}
                                    
                                    <br />
                                    <span className='text-red-500 text-xs'>
                                      Reserved
                                    </span>
                                    </span>
                                    <br/>
                                    <div className="mt-1 flex justify-center gap-1">
                                      <Popup trigger={<button className="bg-amber-400 hover:bg-amber-500 text-white text-xs px-3 py-1.5 rounded font-medium transition-colors duration-200" 
                                      >
                                        Edit
                                        </button>} 
                                        modal 
                                        contentStyle={
                                          {
                                            borderRadius:"15px",
                                            width:"500px",
                                            maxHeight:"800px"
                                          }
                                        } 
                                        
                                          >
                                            {(close)=><Edit lec={lec} room={room} closePopup={close} setLect={setLect} setRoom={setRoom} day={lec.day} setError={setError} setSuccess={setSuccess}/>}
                                      </Popup>
                                    
                                      <Popup trigger={<button className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded font-medium transition-colors duration-200 ">Delete</button>} 
                                      modal  
                                      contentStyle={{
                                            width: "500px",
                                            borderRadius:"15px"
                                          }}>
                                         {(close)=><Delete lec={lec} closePopup={close} setLect={setLect} setRoom={setRoom} day={lec.day} setSuccess={setSuccess} />}
                                      </Popup>
                                    </div>
                                </td>
                            )
                            i+= lec.slots-1
                            time += parseFloat(0.5*(lec.slots-1))

                        }else if(lec && !lec.reserved){
                           cells.push(
                                <td className="border-1  border-gray-200 px-2 sm:px-3 py-2 font-medium text-center" key={i} colSpan={lec.slots}>
                                    {lec.subjectName}
                                    <br/>
                                    <span className="text-gray-400 italic text-[0.8rem] sm:text-xs mt-1 ">
                                    {lec.teacherName}
                                    </span>
                                    <br />
                                    <span className= "text-gray-700 text-[0.65rem] sm:text-xs px-2 py-0.5 inline-block mt-1">
                                    {lec.semester==1?"1st ":lec.semester==2?"2nd ":lec.semester==3?"3rd ":lec.semester==4?"4th ":lec.semester==5?"5th ":lec.semester==6?"6th ":lec.semester==7?"7th ":lec.semester==8?"8th ":""}
                                    
                                    
                                    {lec.type?lec.type.map((lec=>{
                                      return(lec==="R"?"Regular,":lec==="SS1"?"Self Support - I,":lec==="SS2"?"Self Support - II":"")
                                    })):""}
                                    
                                    <br />
                                    
                                    </span>
                                    <br/>
                                    {role === "Admin" && (
                                      <div className="mt-1 flex justify-center gap-1">
                                      <Popup trigger={<button className="bg-amber-400 hover:bg-amber-500 text-white text-xs px-3 py-1.5 rounded font-medium transition-colors duration-200" 
                                      >
                                        Edit
                                        </button>} 
                                        modal 
                                        contentStyle={
                                          {
                                            borderRadius:"15px",
                                            width:"500px",
                                            maxHeight:"800px"
                                          }
                                        } 
                                        
                                          >
                                            {(close)=><Edit lec={lec} room={room} closePopup={close} setLect={setLect} setRoom={setRoom} day={lec.day} setError={setError} setSuccess={setSuccess}/>}
                                      </Popup>
                                    
                                      <Popup trigger={<button className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded font-medium transition-colors duration-200 ">Delete</button>} 
                                      modal  
                                      contentStyle={{
                                            width: "500px",
                                            borderRadius:"15px"
                                          }}>
                                         {(close)=><Delete lec={lec} closePopup={close} setLect={setLect} setRoom={setRoom} day={lec.day} setSuccess={setSuccess} />}
                                      </Popup>
                                    </div>
                                    )}
                                    
                                </td>
                            )
                            i+= lec.slots-1
                            time += parseFloat(0.5*(lec.slots-1))
                        }
                        
                        
                        else{
                            cells.push(
                                <td className="border px-2 sm:px-3 py-2 bg-gray-100 border-dashed text-gray-400 text-center" key={i}>
                                  <div className="mt-1 flex justify-center gap-1">
                                    <Popup trigger={<button type="submit" className="bg-emerald-400 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded font-medium transition-colors duration-200">Add</button>}
                                     modal
                                     contentStyle={{
                                      width:"500px",
                                      borderRadius:"15px"
                                     }}
                                     >
                                      {(close)=><Add room={rm} closePopup={close} setLect={setLect} setRoom={setRoom} day={day} time={time} setError={setError} setSuccess={setSuccess} />}
                                    </Popup>

                                  </div>
                                </td>
                            )
                        }
                      }
                      return cells
              })()}
                  </tr>
                 ))}
        </tbody>
      </table>

      </div>
  );
};

export default Timetable;