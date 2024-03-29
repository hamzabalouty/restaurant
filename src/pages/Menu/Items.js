import React from 'react';
import { menuData } from '../../data';

function menuDetails() {
  return (
    <div>
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
    </div>
  )
}

export default menuDetails;