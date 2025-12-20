import React from 'react'
import Header from './adminLogin/Header'
import Form from './adminLogin/Form'

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[var(--primary-50)] flex items-center justify-center py-12">
        <div className="w-full max-w-md px-6">
            <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-8">
            <Header/>
            <Form/>
            </div>
        </div>
    </div>
    
  )
}

export default AdminLogin;