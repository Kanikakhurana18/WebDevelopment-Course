import React from 'react'
import image1 from "../assets/image1.jpg"
import images2 from "../assets/images2.jpg"
import images3 from "../assets/images3.jpg"

function Hero() {
  return (
      <div className="hero">
        <img src={image1} alt=""  width="340px"/>
        <img src={images2} alt="" width="305px"/>
        <img src={images3} alt="" width="305px"/>
      </div>

  )
}

export default Hero
