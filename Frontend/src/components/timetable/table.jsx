import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'


const Table = ({lect,room}) => {
    
  return (

    
     <main className="max-w-6xl mx-auto px-4 py-6">
        
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
                        const lec = lect.find(l => l.time === time && l.roomNumber === rm.name);
                        if(lec){
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
                            time += parseFloat(0.5*(lect.slots-1))
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