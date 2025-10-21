import React from 'react'
import Logo1 from '../../assets/logo1.jpg';
import { Link } from 'react-router-dom';
const Body = () => {
  return (
    <div className="grid md:grid-cols-2 items-center flex-1 px-8 lg:px-16 py-12 gap-10 justify-between">

    <div className="space-y-8 text-center md:text-left">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Manage Your <br /> Timetable Easily
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0 mt-3">
          Access semester schedules, view updates, and simplify timetable management with our online platform.
        </p>
      </div>

      <div className="flex justify-center md:justify-start gap-4 mt-6">
 
      <Link to="/timetable/student">
        <button 
          className="soft-btn px-5 py-2.5 rounded-lg text-white bg-[#81C784] focus:outline-none transition-all duration-300 ease-in-out hover:bg-[#66BB6A]"
        >
          View TimeTable
        </button>
      </Link>

      <a href="/signin/cr">
        <button 
          className="soft-btn px-5 py-2.5 rounded-lg text-white bg-[#009688] focus:outline-none transition-all duration-300 ease-in-out hover:bg-[#00796B]"
        >
          Login as CR / GR
        </button>
      </a>
  

      <Link to="/timetable/admin">
        <button 
          className="soft-btn px-5 py-2.5 rounded-lg text-white bg-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:bg-gray-700"
        >
          Login as Admin
        </button>
      </Link>
    </div>

    </div>

    <div className="relative flex justify-center">
      <div className="rounded-3xl p-6 bg-[var(--primary-600)] shadow-lg flex items-center justify-center relative">
        <div className="w-full max-w-lg aspect-[4/3] overflow-hidden rounded-2xl">
          <img 
            src={Logo1}
            alt="Student on laptop" 
            className="hero-img w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-6 left-6 bg-white shadow px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium">
          <div className="flex -space-x-2">
            <img src="/res/images/pic1.jpg" className="w-6 h-6 rounded-full border" alt="" />
            <img src="/res/images/pic2.jpg" className="w-6 h-6 rounded-full border" alt="" />
          </div>
          Academic Block
        </div>
      </div>
    </div>
  </div>
  )
}

export default Body