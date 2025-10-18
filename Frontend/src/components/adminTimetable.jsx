import React from 'react'
import Nav from './adminTimetable/nav'
import Form from './adminTimetable/form'
import Timetable from './adminTimetable/timetable'

const AdminTimetable = () => {
  return (
    <div>
        <Nav/>
        <div className="max-w-6xl mx-auto px-4 py-6">
            <Form/>
            <Timetable/>
        </div>
        
    </div>
    
  )
}

export default AdminTimetable