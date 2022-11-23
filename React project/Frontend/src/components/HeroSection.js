import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/sports.mp4' autoPlay loop muted /> */}
      <h1 style={{ align: 'center' }}>Hey, Folks</h1>
      <p>Welcome to the Application</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Quick Login
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
