import './App.css'
import Dashboard from './components/dashboard'
import Timetable from './components/timetable'
import AdminTimetable from './components/adminTimetable'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/timetable/student' element={<Timetable/>}/>
      <Route path='/timetable/admin' element={<AdminTimetable/>}/>
    </Routes>
    </BrowserRouter>





  )
}

export default App
