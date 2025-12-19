import React, { useState } from 'react'
import AdminLogin from '../../api/adminLoginApi';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
    const [data,setData] = useState({
      username:"",
      password:"",
      remember:false
    });

    const handleChange = (e)=>{
      const {name,type,value,checked} = e.target;
      setData((prevData)=>({
        ...prevData,
        [name]:type==="checkbox"?checked:value
      }))
    }

    const handleSubmit = async(e)=>{
            
        e.preventDefault();
        console.log("function called")
        const result = await AdminLogin(data);
        if(result.status === "success"){
          navigate("/timetable/admin");
        }else {
          alert("Invalid credentials");
          navigate("/login/admin");
        }
      
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">ID</label>
            <input id="username" name="username" type="text" required placeholder="ID" class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" onChange={handleChange} value={data.username} />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" required placeholder="********" class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" onChange = {handleChange} value = {data.password} />
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" value="true" name="remember" class="h-4 w-4 rounded border-gray-300 text-[var(--primary-500)] focus:ring-[var(--primary-500)] accent-teal-600" onChange = {handleChange} checked={data.remember} />
              <span class="text-gray-600">Remember me</span>
            </label>
          </div>

          <div>
            <button type="submit" class="w-full inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 bg-[var(--primary-600)] text-white font-medium hover:bg-[var(--primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-50)]">
              Login
            </button>
          </div>
        </form>
    </div>
  )
}

export default Form