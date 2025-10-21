import React from 'react'
import Header from './crSignUp/header'
import Form from './crSignUp/form'
import Registered from './crSignUp/registered'

const CrSignUp = () => {
  return (
    <div class="min-h-screen bg-gradient-to-b from-white to-[var(--primary-50)] flex items-center justify-center py-12">
        <div class="w-full max-w-md px-6">
            <div class="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-8">
                <Header/>
                <Form/>
                <Registered/>
            </div>
        </div>
    </div>
  )
}

export default CrSignUp