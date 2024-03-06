import React from 'react';
import './Landing.css';
import Image from '../../assets/slide-2.jpg';

function Landing() {
  return (
    <div className='landing'>
        <img src={Image} alt='img'/>
        <div className='landing-content'>
            <h2>Himab Restaurant</h2>
            <p>123 Main Street, Uni 21, New York City</p>
        </div>
    </div>
  )
}

export default Landing