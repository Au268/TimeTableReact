import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Add from './add';
import Edit from './edit';
import Delete from './delete';

const Timetable = ({lect,room,setLect,setRoom,day,setError,setSuccess}) => {
  return (
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
              {room.map((rm,roomIndex)=>(
                  <tr key={roomIndex} className="hover:bg-gray-50 text-xs sm:text-sm">
                    
                  <td className="border-1 border-gray-200 px-2 sm:px-3 py-2 font-medium">
                    {rm.name}
                  </td>
                  {(()=>{
                    let cells = []
                  for(let time=8,i=0;i<20;time+=0.5,i++){
                        const lec = lect.find(l => l.time == time && l.roomNumber === rm.name);
                        if(lec){
                            cells.push(
                                <td className="border-1 border-gray-200 px-2 sm:px-3 py-2 font-medium text-center" key={i} colSpan={lec.slots}>
                                    {lec.subjectName}
                                    <br/>
                                    <span className="text-gray-400 italic text-[0.8rem] sm:text-xs mt-1 ">
                                    {lec.teacherName}
                                    </span>
                                    <br />
                                    <span className= "text-gray-700 text-[0.65rem] sm:text-xs px-2 py-0.5 inline-block mt-1">
                                    {lec.semester==1?"1st":lec.semester==2?"2nd":lec.semester==3?"3rd":lec.semester==4?"4th":lec.semester==5?"5th":lec.semester==6?"6th":lec.semester==7?"7th":lec.semester==8?"8th":""}
                                    </span>
                                    <span className="text-gray-700 text-[0.65rem] sm:text-xs py-0.5 uppercase inline-block mt-1">
                                    {lec.type?lec.type.map((lec=>{
                                      return(lec==="R"?"Regular,":lec==="SS1"?"Self Support - I,":lec==="SS2"?"Self Support - II":"")
                                    })):""}
                                    
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

                        }else{
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