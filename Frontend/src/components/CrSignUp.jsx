import React from 'react'
import Header from './crSignUp/header'
import Form from './crSignUp/form'
import Registered from './crSignUp/registered'
import { ToastContainer } from 'react-toastify';


const CrSignUp = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[var(--primary-50)] flex items-center justify-center py-12">
      <ToastContainer 
           position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          toastStyle={{ width: '400px' }}
      />
        <div className="w-full max-w-md px-6">
            <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-8">
                <Header/>
                <Form/>
                <Registered/>
            </div>
        </div>
    </div>
  )
}

export default CrSignUp