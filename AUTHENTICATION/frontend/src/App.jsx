import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import { useContext } from 'react'
import { dataContext } from '../context/UserContext'

function App() {
  let {userData,setUserData}=useContext(dataContext)
  return (
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={userData?<Home/>:<Login/>}/>
    </Routes>
  )
}

export default App
