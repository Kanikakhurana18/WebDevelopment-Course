import { useContext } from 'react'
import './App.css'
import { data } from './context/UserContext'
import Card from './Card'

function App() {
  let name=useContext(data)

  return (
    <>
      <h1>
        {name}
      </h1>
      <Card/>
    </>
  )
}

export default App
