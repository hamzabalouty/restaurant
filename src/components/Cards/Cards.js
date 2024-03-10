import React from 'react';
import './Cards.css';
import { cardsData } from '../../data';
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";

function Cards() {

  const dispatch = useDispatch();

  return (
    <div className='cards'>
        <div className='slider-title'>
                <p><span>- </span>Should to Try<span> -</span></p>
                <h3>CHEF RECOMMENDS</h3>
            </div>
        <div className='cards-container'>
            {cardsData.map((item) => (
                <div className='card-box'>
                    <img src={item.image} alt='image'/>
                    <div className='price-overlay'>
                        <p>${item.price}</p>
                    </div>
                    <div className='card-content'>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                        <button onClick={() => dispatch(addToCart(item))} className='addtocart-card'>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards;