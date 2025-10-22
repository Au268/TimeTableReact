import React, { useState } from 'react'
import CrSignin from '../../api/crSigninApi'
import HandleSignInSubmit from './handleSubmit'

const Form = () => {

  const [data,setData] = useState({
    rollno:"",
    password:""
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    HandleSignInSubmit(data);
  }



  return (
    <div>
    
    <form onSubmit={handleSubmit}>
          <div>
            <label for="rollno" className="block text-sm font-medium text-gray-700">Roll Number</label>
            <input id="rollno" name="rollno" type="text" required placeholder="Enter your full roll number" className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" value={data.rollno} onChange={handleChange} />
          </div>

          <div className='mt-5'>
            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" required placeholder="Enter your password" className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" value={data.password} onChange={handleChange} />
          </div>

          {/* <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="remember" className="h-4 w-4 rounded border-gray-300 text-[var(--primary-500)] focus:ring-[var(--primary-500)] accent-teal-600" value="true" />
              <span className="text-gray-600">Remember me</span>
            </label>

          </div> */}

          <div className='mt-5'>
            <button type="submit" className="w-full inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 bg-[var(--primary-600)] text-white font-medium hover:bg-[var(--primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-50)]">
              Sign In
            </button>
          </div>
        </form>
        
        </div>
  )
}

export default Form