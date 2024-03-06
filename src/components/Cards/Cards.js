import React from 'react';
import './Cards.css';
import Img1 from '../../assets/product-5-370x247.jpg';
import Img2 from '../../assets/product-4-370x247.jpg';
import Img3 from '../../assets/product-1-370x247.jpg';

function Cards() {
  return (
    <div className='cards'>
        <div className='slider-title'>
                <p><span>- </span>Should to Try<span> -</span></p>
                <h3>CHEF RECOMMENDS</h3>
            </div>
        <div className='cards-container'>
            <div className='card-box'>
                <img src={Img1} alt='image'/>
                <div className='price-overlay'>
                    <p>$30.00</p>
                </div>
                <div className='card-content'>
                    <h4>Caeser Salad</h4>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='addtocart-card'>Add To Cart</button>
                </div>
            </div>
            <div className='card-box'>
                <img src={Img2} alt='image'/>
                <div className='price-overlay'>
                    <p>$15.00</p>
                </div>
                <div className='card-content'>
                    <h4>Apple Strudel</h4>
                    <p>Apples, Vanilla Ice Cream, Nuts</p>
                    <button className='addtocart-card'>Add To Cart</button>
                </div>
            </div>
            <div className='card-box'>
                <img src={Img3} alt='image'/>
                <div className='price-overlay'>
                    <p>$15.00</p>
                </div>
                <div className='card-content'>
                    <h4>Cherry Pie</h4>
                    <p>Cherries, Dough, White Sugar, Cheese, Vanilla Ice Cream</p>
                    <button className='addtocart-card'>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;