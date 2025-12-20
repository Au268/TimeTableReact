import React from 'react'
import logo from '../../assets/logo1.jpg'

const Header = () => {
  return (
    <header class="mb-6 text-center">
        <div
            class="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-[var(--primary-50)] border-2 border-[var(--primary-600)] overflow-hidden">
            <img src={logo} alt="University Logo" class="w-full h-full object-cover" />
        </div>
        <h1 class="mt-4 text-2xl font-semibold text-gray-800">CR/GR Signup</h1>
        <p class="text-sm text-gray-500 mt-1">Register your details to manage class schedules</p>
    </header>
      
  )
}

export default Header