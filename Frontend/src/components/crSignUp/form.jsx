import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Key from '@mui/icons-material/Key';
import CrSignup from '../../api/crSignupApi';

const Form = () => {

   const [showCode , setShowCode] = React.useState(false);
  const minLength = 12;

  const [data,setData]=React.useState({
    name:"",
    rollno:"",
    type:"",
    semester:1,
    email:"",
    password:"",
    code:""
  })

  const handleChange = (e)=>{
      const {name,value} = e.target;
      setData((prevData)=>({
        ...prevData,
        [name]:value
      }))
    }

    const handleSubmit = async(e)=>{
            e.preventDefault();
            try {
            const result = await CrSignup(data)
            if(result.status === "failure"){
              if(result.code){
                setShowCode(true);
              }
            }else if(result.status === "success") {
              alert("Successfully Signed up");
            }
          } catch (error) {
            alert("Error Occurred",error.message)
          }
          }
          
        
  


  return (

    

    <form onSubmit={handleSubmit}>

          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input id="name" name="name" type="text" required placeholder="Enter your full name"
              class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" value={data.name} onChange={handleChange} />
          </div>

          <div>
            <label for="rollno" class="block text-sm font-medium text-gray-700">Roll Number</label>
            <input id="rollno" name="rollno" type="text" required placeholder="Enter your full roll number" 
              class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" value={data.rollno} onChange={handleChange} />
          </div>

          <div>
            <label for="semester" class="block text-sm font-medium text-gray-700">Semester</label>
            <select id="semester" name="semester"
              class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" value={data.semester} onChange={handleChange} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
          </div>

            <div>
            <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
            <select id="type" name="type"
              class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" value={data.type} onChange={handleChange}>
                <option value="R">Regular</option>
                <option value="SS1">Self Support - I</option>
                <option value="SS2">Self Support - II</option>
            </select>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" required placeholder="Enter your email" 
              class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" value={data.email} onChange={handleChange} />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            {/* <input id="password" name="password" type="password" required placeholder="Choose a strong password" 
              class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" /> */}
        <Stack spacing={0.5} sx={{ '--hue': Math.min(data.password.length * 10, 120) }}>
          <Input
            type="password"
            placeholder="Enter your password"
            startDecorator={<Key />}
            value={data.password}
            name='password'
            onChange={handleChange}
          />
          <LinearProgress
            determinate
            size="sm"
            value={Math.min((data.password.length * 100) / minLength, 100)}
            sx={{ bgcolor: 'background.level3', color: 'hsl(var(--hue) 80% 40%)' }}
          />
          <Typography
            level="body-xs"
            sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
          >
            {data.password.length < 3 && 'Very weak'}
            {data.password.length >= 3 && data.password.length < 6 && 'Weak'}
            {data.password.length >= 6 && data.password.length < 10 && 'Strong'}
            {data.password.length >= 10 && 'Very strong'}
          </Typography>
        </Stack>

          </div>
          {showCode?
            <div>
            <label for="code" class="block text-sm font-medium text-gray-700">Code</label>
            <input id="code" name="code" type="number" required placeholder="Enter Code sent to your email"
              class="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-50)] focus:outline-none" value={data.code} onChange={handleChange} />
          </div>
        :<div></div>
          } 

          
          <div>
            <button type="submit"
              class="w-full inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 bg-[var(--primary-600)] text-white font-medium hover:bg-[var(--primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-50)]">
              Sign Up
            </button>
          </div>
        </form>
  )
}

export default Form