import './App.css'
import Dashboard from './components/dashboard'
import Timetable from './components/timetable'
import AdminTimetable from './components/adminTimetable'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AdminLogin from './components/AdminLogin'
import loginMiddle from './api/loginMiddleApi'
import IsAuthenticated from './components/checkAuth'
import CrSignUp from './components/CrSignUp'
import CrSignIn from './components/CrSignIn'
import RequestHandler from './components/RequestHandler'

function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path='/timetable/student' element={<Timetable />}></Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path='/timetable/admin' element={
          <IsAuthenticated name={"admin"}>
            <AdminTimetable />
          </IsAuthenticated>
        }>
        </Route>
         <Route path='/timetable/cr' element={
          <IsAuthenticated name={"cr"}>
            <AdminTimetable />
          </IsAuthenticated>
        }>
        </Route>
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/newcr" element={<CrSignUp />} />
        <Route path="/login/cr" element={<CrSignIn />} />
        <Route path="/requestHandler" element={<RequestHandler />} />
      </Routes>
    </BrowserRouter>





  )
}

export default App
