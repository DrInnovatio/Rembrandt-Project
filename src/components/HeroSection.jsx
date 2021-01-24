import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      <video src='/videos/cleaning_3.mp4' autoPlay loop muted /> 
      <h3>You will experience our services SOON</h3>
      <p>Since 2008</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          How to use the app <i className='fa fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
