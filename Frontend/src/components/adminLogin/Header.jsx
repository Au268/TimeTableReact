import React from 'react'
import logo from '../../assets/logo1.jpg'

const Header = () => {
  return (
    <div>
        <header class="mb-6 text-center">
          <div class="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-[var(--primary-50)] border-2 border-[var(--primary-600)] overflow-hidden">
            <img src={logo} alt="University Logo" class="w-full h-full object-cover" />
          </div>
          <h1 class="mt-4 text-2xl font-semibold text-gray-800">SE Timetable - Admin</h1>
          <p class="text-sm text-gray-500 mt-1">Enter your assigned ID and password to log in</p>
        </header>
    </div>
  )
}

export default Header;