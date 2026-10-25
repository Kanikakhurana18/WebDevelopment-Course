import React, { useContext, useRef, useState } from 'react'
import image from "../assets/images.jpg"
import { dataContext } from '../../context/UserContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function SignUp() {
  let { serverUrl, userData, setUserData, getUserData} = useContext(dataContext)
  let navigate = useNavigate()

  let [firstName, setFirstName] = useState("")
  let [lastName, setlastName] = useState("")
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")
  let [userName, setuserName] = useState("")
  let file = useRef(null)

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      let formdata = new FormData()
      formdata.append("firstName", firstName)
      formdata.append("lastName", lastName)
      formdata.append("userName", userName)
      formdata.append("email", email)
      formdata.append("password", password)
      if (backendimage) {
        formdata.append("profileImage", backendimage)
      }
      let { data } = await axios.post(serverUrl + "/api/signup", formdata, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      })
      await getUserData()
      setUserData(data.user)
      navigate("/")

    } catch (error) {
      console.log("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.message || error.message);
    }
  }

  let [fronendimage, setfrontendimage] = useState(image)
  let [backendimage, setbackendimage] = useState(null)
  function handleImage(e) {
    let file = e.target.files[0]
    setbackendimage(file)
    let img = URL.createObjectURL(file)
    setfrontendimage(img)
  }

  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'>
      <div className='w-[90%] max-w-120 h-140 bg-[#141f1f] rounded  flex flex-col justify-center items-center gap-5'>
        <h1 className='text-white text-2xl font-semibold'>Sign up</h1>

        <div className='w-25 h-25 rounded-full bg-white overflow-hidden relative border-2 border-white'>
          <img src={fronendimage} alt="" className='w-25 h-25 object-cover' />
          <div className='absolute w-25 h-25 bg-black top-0 opacity-0 hover:opacity-50 cursor-pointer flex justify-center items-center text-white font-bold text-[24px]' onClick={() => { file.current.click() }}>
            +
          </div>
        </div>

        <form className='w-full flex flex-col items-center justify-center gap-5' onSubmit={handleSignup}>
          <input type="file" hidden ref={file} onChange={handleImage} />

          <div className='w-[80%] h-12 flex justify-center items-center gap-2.5'>

            <input type="text" placeholder='first name' className='w-[50%] h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.25' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <input type="text" placeholder='last name' className='w-[50%] h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.25' value={lastName} onChange={(e) => setlastName(e.target.value)} />
          </div>

          <input type="text" placeholder='username' className='w-[80%] h-12.5 bg-white outline-none border-none rounded-lg px-2.5 py-1.25' value={userName} onChange={(e) => setuserName(e.target.value)} />

          <input type="email" placeholder='email' className='w-[80%] h-12.5 bg-white outline-none border-none rounded-lg px-2.5 py-1.25' value={email} onChange={(e) => setemail(e.target.value)} />

          <input type="password" placeholder='password' className='w-[80%] h-12.5 bg-white outline-none border-none rounded-lg px-2.5 py-1.25' value={password} onChange={(e) => setpassword(e.target.value)} />

          <button className='bg-[#07c7e4] text-black px-2.5 py-1.25 rounded-lg cursor-pointer'>
            Sign Up</button>

          <p className='text-white cursor-pointer font-semibold' onClick={() => navigate("/login")}>Already have an account ?
            <span className='text-[#0ed3e1]'> Login</span></p>
        </form>
      </div>

    </div>
  )
}

export default SignUp
