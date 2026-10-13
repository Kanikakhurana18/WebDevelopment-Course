import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'
import images3 from "../../assets/images3.jpg"
import images1 from "../../assets/images1.jpg"
import images2 from "../../assets/images2.jpg"

function Hero() {
  return (
    <div className='hero'>
      <Card name="BMW" price="1.9cr" imageUrl={images1}/>
      <Card name="Range Rover" price="2cr" imageUrl={images2}/>
      <Card name= "Lamborgani" price ="3cr" imageUrl={images3}/>
    </div>
  )
}

export default Hero
