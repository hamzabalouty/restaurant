import React from 'react';
import './Menu.css';
import { menuData } from '../../data';

function Menu() {
  return (
    <div className='menu'>
        <div className='slider-title'>
            <p><span>- </span>Random Dishes<span> -</span></p>
            <h3>FROM OUR MENU</h3>
        </div>
        <div className='menu-container'>
          {menuData.map((item) => (
            <div className='menu-box' key={item.id}>
                <img src={item.img} alt='image'/>
                <div className='menu-content'>
                    <div className='menu-title'>
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>
                    </div>
                    <p>{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
        <button className='menu-btn'>VIEW FULL MENU</button>
    </div>
  )
}

export default Menu;