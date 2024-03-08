import React, { useEffect } from 'react';
import './Menu.css';
import Items from './Items';

function Menu() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='menupage'>
      <div className='menupage-title'>
        <h3>Our Menu</h3>
      </div>
      <div className='menupage-header'>
        <p><span>- </span>Don't Miss<span> -</span></p>
        <h3>TODAY'S OFFER</h3>
      </div>
      <Items />
      <div className='menupage-dessert'>
        <div className='menupage-item-content'>
          <h4>DESSERTS</h4>
          <p>LOREM IPSUM HAS BEEN THE INDUSTRY’S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.</p>
        </div>
      </div>
      <Items />
      <div className='menupage-pizza'>
        <div className='menupage-item-content'>
          <h4>PIZZA</h4>
          <p>LOREM IPSUM HAS BEEN THE INDUSTRY’S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.</p>
        </div>
      </div>
      <Items />
      <div className='menupage-salads'>
        <div className='menupage-item-content'>
          <h4>SALADS</h4>
          <p>LOREM IPSUM HAS BEEN THE INDUSTRY’S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.</p>
        </div>
      </div>
      <Items />
      <div className='menupage-soups'>
        <div className='menupage-item-content'>
          <h4>SOUPS</h4>
          <p>LOREM IPSUM HAS BEEN THE INDUSTRY’S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.</p>
        </div>
      </div>
      <Items />
    </div>
  )
}

export default Menu;