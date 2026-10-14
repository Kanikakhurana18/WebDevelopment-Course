import { useState, useRef } from 'react';
import './App.css'
import React from 'react'
import { useEffect } from 'react';

//USEREF HOOK
function App() {
  let inputvalue= useRef("")
  console.log(inputvalue)
  // let[num,setnum]=useState(0)

  // useEffect(()=>{
  //   count.current=count.current+1
  // })

  return (
    <div>
      <input type="text" ref={inputvalue} value="Kanika Khurana"/>
      {/* <h1>{count.current}</h1>
      <h1>{num}</h1>
      <button onClick={()=>setnum(++num)}>num</button> */}
    </div>
  )
}

export default App


//USE EFFECT HOOK
// function App() {
//   let [count,setcount]= useState(0)
//   let [count2, setcount2]= useState(0)
//   //WHEN EMPTY ARRAY PASSED =runs on first render
//   useEffect(()=>{
//     // setTimeout(()=>{
//     //   setcount(++count)
//     // },1000)
//     console.log("Hello world")
// },[count])

  //NO DEPENDENCY= runs on everu render
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setcount(++count)
  //   },1000)
  // })

//   return (
//     <>
//       <h1>{count}</h1>
//       <h1>{count2}</h1>
//       <button onClick={()=> setcount(++count)}>count</button>
//       <button onClick={()=> setcount2(++count2)}>count2</button>
//     </>
//   )
// }

// export default App


//USESTATE HOOK
// function App() {
//   let [count,setcount]=useState(10)
//   return (
//     <>
//      <h1>{count}</h1>
//      <button onClick={()=>{
//      setcount(--count)
//      }
//      }>Increment</button>
//     </>
//   )
// }

// export default App
