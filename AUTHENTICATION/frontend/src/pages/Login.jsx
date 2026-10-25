import React, { useContext, useState } from 'react'
import { dataContext } from '../../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  let navigate= useNavigate()
  let {serverUrl,userData,setUserData, getUserData}= useContext(dataContext)
  let [email, setemail]= useState("")
  let [password, setpassword]= useState("")

  const handleLogin= async(e)=>{
    e.preventDefault()
    try {
      let {data}= await axios.post(serverUrl+ "/api/login",{
        email,password
      },{withCredentials:true})
      setUserData(data.user)
      await getUserData()
      if(userData){
      navigate("/")
      }
      
    } catch (error) {
      console.error("LOGIN ERROR:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'>
        <div className='w-[90%] max-w-120 h-140 bg-[#141f1f] rounded  flex flex-col justify-center items-center gap-5'>
          <h1 className='text-white font-semibold text-2xl'>Login</h1>

          <form className='w-full flex flex-col items-center justify-center gap-5' onSubmit={handleLogin}>

            <input type="email" placeholder='email' className='w-[80%] h-12.5 bg-white outline-none border-none rounded-lg px-2.5 py-1.25'value={email} onChange={(e)=>setemail(e.target.value)}/>

            <input type="password" placeholder='password' className='w-[80%] h-12.5 bg-white outline-none border-none rounded-lg px-2.5 py-1.25'value={password} onChange={(e)=>setpassword(e.target.value)}/>

            <button className='bg-[#07c7e4] text-black px-2.5 py-1.25 rounded-lg cursor-pointer'>
            Log in</button>

            <p className='text-white cursor-pointer font-semibold' onClick={()=>navigate("/signup")}>Want to create new account ?
              <span className='text-[#0ed3e1]'> Sign up</span></p>
          </form>
        </div>
      
    </div>
  )
}

export default Login
