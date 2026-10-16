import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function App() {
    let[username,setusername]=useState(null)
    let[city,setcity]=useState(null)
    let[age,setage]=useState(null)
  async function getRes() {


    // try {
    //   const res = await fetch("http://localhost:8000/")
    //   let data = await res.json()
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }


    // axios.get("http://localhost:8000/")
    // .then((e)=>{
    //   console.log(e.data.name);   
    // })
    // .catch((e)=>{
    //   console.log(e);  
    // })

    axios.post("http://localhost:8000/",{
      username:username,
      age,
      city
    })
    .then((e)=>{
      console.log(e.data);   
    })
    .catch((e)=>{
      console.log(e);  
    })

}


  return (
    <div>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setusername(
        e.target.value
  )}/>
      <input type="text" placeholder='city' value={city} onChange={(e)=>setcity(
        e.target.value
  )} />
      <input type="text" placeholder='age' value={age} onChange={(e)=>setage(
        e.target.value
  )}/>
      <button onClick={() => getRes()}>Send</button>
    </div>
  )
}

export default App
