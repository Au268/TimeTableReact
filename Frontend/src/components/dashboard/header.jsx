import React from 'react'
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
   
    <header className="relative w-full h-16 bg-white shadow-md overflow-hidden flex items-center">

        <div className="w-full flex items-center justify-center overflow-hidden">
            <div className=" text-2xl font-bold text-gray-800 whitespace-nowrap w-full">
            <Marquee className="text-2xl font-bold text-gray-800">
            Department Of SE Timetable
           </Marquee>
            </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
    </header>
   
  )
}

export default Header