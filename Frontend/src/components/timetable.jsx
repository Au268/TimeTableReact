import React from 'react'
import Nav from './timetable/nav'
import Main from './timetable/main'
import Table from './timetable/table'
import { useState } from 'react'

const Timetable = () => {
  
    const [lect,setLect] = useState([]);
    const [room,setRoom] = useState([]);

  return (
    <div>
        <Nav/>
        <Main setLect={setLect} setRoom={setRoom}/>
        {lect.length===0?"":
        <Table lect={lect} room={room}/>
        }
    </div>
  )
}

export default Timetable;