import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      <video src='/videos/cleaning_3.mp4' autoPlay loop muted /> 
      <h3>You will experience our services SOON</h3>
      <p>Australia's most Intensive and Intelligent Cleaning Company</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Why Us ? 
        </Button>
        
      </div>
    </div>
  )
}

export default HeroSection
