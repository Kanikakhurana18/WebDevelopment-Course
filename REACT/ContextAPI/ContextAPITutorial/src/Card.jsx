import React, { useContext } from 'react'
import { data } from './context/Story'

function Card() {
   let obj= useContext(data)
  return (
    <div>
      <h1>Story name: {obj.name}</h1>
      <h2>Storyline: {obj.storyline}</h2>
    </div>
  )
}

export default Card
