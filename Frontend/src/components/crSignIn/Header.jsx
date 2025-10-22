import React from 'react'
import logo from '../../assets/logo1.jpg'

const Header = () => {
  return (
        <header className="mb-6 text-center">
          <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-[var(--primary-50)] border-2 border-[var(--primary-600)] overflow-hidden">
            <img src={logo} alt="University Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-gray-800">CR/GR Sign In</h1>
          <p className="text-sm text-gray-500 mt-1">Access your account to manage className schedules</p>
        </header>
    
  )
}

export default Header