import React from 'react'
import './Hero.css'
import fashion_icon from '../assests/fashion_icon.png'
import arrow_icon from '../assests/arrow.png'
import hero_img from '../assests/hero_img.jpg'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW FASHION ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={fashion_icon} alt="" />
                </div>
                <p>fashion</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
              <div>Latest One</div>
              <img src={arrow_icon} alt="" />
            </div>
            </div>
        <div className="hero-right">
          <img src={hero_img} alt="" />
        </div>
    </div>
  )
}
