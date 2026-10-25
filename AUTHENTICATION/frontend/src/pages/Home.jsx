import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
    let{userData, setUserData, serverUrl}= useContext(dataContext)
    let navigate=useNavigate()
    if(!userData){
      navigate("/login")
    }

    const handleLogOut= async()=>{
      try {
        let data=await axios.post(serverUrl + "/api/logout",{},{
          withCredentials:true
        })
        setUserData(null)
      } catch (error) {
        console.log(error);
        
      }
    }


  return (
    <div className='w-full h-screen bg-[#141f1f] flex flex-col justify-center items-center gap-5'>

      <div className='w-25 h-25 rounded-full bg-white overflow-hidden relative border-2 border-white'>
          <img src={userData.profileImage} alt="" className='w-25 h-25 object-cover' />
        </div>

      <h1 className='text-white text-xl'>Hey!, <span className='text-[#07c7e4] text-2xl font-semibold'>{userData.firstName} </span> , Welcome to your first authentication project</h1>

      <button className='bg-[#07c7e4] text-black px-2.5 py-1.25 rounded-lg cursor-pointer' onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default Home
