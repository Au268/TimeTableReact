  import './App.css'
  import Dashboard from './components/dashboard'
  import Timetable from './components/timetable'
  import AdminTimetable from './components/adminTimetable'
  import {BrowserRouter,Routes,Route,Link, Navigate} from 'react-router-dom'
  import { useEffect, useState } from 'react'
  import AdminLogin from './components/AdminLogin'
  import loginMiddle from './api/loginMiddleApi'
  import IsAuthenticated from './components/checkAuth'
import CrSignUp from './components/CrSignUp'

  function App() {
    
    return (

      <BrowserRouter>
      <Routes>
        <Route path='/timetable/student' element={<Timetable/>}></Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path='/timetable/admin' element={
          <IsAuthenticated>
          <AdminTimetable />
        </IsAuthenticated>
        }>
        </Route>
        
        <Route path="/login/admin" element={<AdminLogin/>} />
        <Route path="/login/cr" element={<CrSignUp/>} />
        
      </Routes>
    </BrowserRouter>





    )
  }

  export default App
