import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { menuData } from '../../data';
import Item from '../../pages/Menu/Items';

function Menu() {
  return (
    <div className='menu'>
        <div className='slider-title'>
            <p><span>- </span>Random Dishes<span> -</span></p>
            <h3>FROM OUR MENU</h3>
        </div>
        <div className='menu-container'>
          <Item />
        </div>
        <Link to='/menu' className='menu-btn'>VIEW FULL MENU</Link>
    </div>
  )
}

export default Menu;