import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Hi..!✋<br /> I'm Tanimur Rahman Abir —</h1>
        <p>a passionate developer with a love for building creative and functional web solutions.</p>
        <Link to="contact" smooth={true} offset={-200} duration={500}><button className='btn'>Get in Touch</button></Link>
      </div>
    </div>
  )
}

export default Hero