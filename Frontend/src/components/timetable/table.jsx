import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'


const Table = ({lect,room}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredLect = searchTerm? lect.filter(l =>
        l.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.subjectName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : lect;
  return (

    
     <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-4 flex justify-center">
          <input
          type="text"
          placeholder="Search by teacher name or subject name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)]"
          />
        </div>

      <div className="overflow-x-auto  max-h-[80vh]">
        <table className="w-full border-collapse bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-xs sm:text-sm">
          <thead className="bg-[var(--primary-600)] text-white sticky top-0">
            <tr>
              <th className="px-2 sm:px-4 py-2 border sticky top-0">Room / Time</th>
              <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">8 - 9:30</th>
              <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">9:30 - 11</th>
              <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">11 - 12:30</th>
              <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">12:30 - 2</th>
              <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">2 - 3:30</th>
              <th colSpan="3" className="px-2 sm:px-4 py-2 border sticky top-0">3:30 - 5</th>
              <th colSpan="2" className="px-2 sm:px-4 py-2 border sticky top-0">5:00 - 6:00</th>
            </tr>
          </thead>
          <tbody>
                {room.map((rm, roomIndex) => (
            <tr key={roomIndex} className="hover:bg-gray-50 text-xs sm:text-sm">
                <td className="border border-gray-200 px-2 sm:px-3 py-2 font-medium">
                {rm.name}
                </td>

                {(()=>{
                    let cells = []
                     for(let time=8,i=0;i<20;time+=0.5,i++){
                        const lec = filteredLect.find(l => l.time === time && l.roomNumber === rm.name);
                        if(lec && lec.reserved){

                            cells.push(

                                  <td className="border px-2 sm:px-3 py-2 text-center bg-teal-50 border-teal-500 font-semibold text-teal-900" key={i} colSpan={lec.slots}>
                                    {lec.subjectName}
                                    <br/>
                                    <span className="text-teal-700 text-[0.65rem] sm:text-xs">
                                    {lec.teacherName}
                                    </span>
                                    <br />
                                    <span className='text-red-500 text-xs'>
                                    Reserved
                                    </span>                                 
                                    <br/>
                                  </td>
                            )
                            i+= lec.slots-1
                            time += parseFloat(0.5*(lec.slots-1))
                        }else if(lec && !lec.reserved){
                          cells.push(

                                  <td className="border-1 border-gray-200 px-2 sm:px-3 py-2 font-medium text-center" key={i} colSpan={lec.slots}>
                                    {lec.subjectName}
                                    <br/>
                                    <span className="text-gray-500 text-[0.65rem] sm:text-xs">
                                    {lec.teacherName}
                                    </span>
                                                                     
                                    <br/>
                                  </td>
                                
                            )
                            i+= lec.slots-1
                            time += parseFloat(0.5*(lec.slots-1))
                        }else{
                            cells.push(
                                <td className="border px-2 sm:px-3 py-2 bg-gray-100 border-dashed text-gray-400 text-center" key={i}>

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
      </main>
                        
  )
}

export default Table