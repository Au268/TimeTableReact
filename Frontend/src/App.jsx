import './App.css'
import Dashboard from './components/dashboard'
import Timetable from './components/timetable'
import AdminTimetable from './components/adminTimetable'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/timetable/student' element={<Timetable/>}/>
    </Routes>
    </BrowserRouter>



    // <AdminTimetable/>

  )
}

export default App
