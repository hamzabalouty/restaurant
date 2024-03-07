import React from 'react';
import './Gallery.css';
import Img1 from '../../assets/image-1-370x247.jpg';
import Img2 from '../../assets/image-2-370x247.jpg';
import Img3 from '../../assets/image-3-370x247.jpg';
import Img4 from '../../assets/image-4-370x247.jpg';
import Img5 from '../../assets/image-5-370x247.jpg';
import Img6 from '../../assets/image-6-370x247.jpg';

function Gallery() {
  return (
    <div className='gallery'>
        <div className='gallery-title'>
            <h3>Gallery</h3>
        </div>
        <div className='gallery-container'>
            <div className='gallery-box'>
                <img src={Img1} alt='image'/>
            </div>
            <div className='gallery-box'>
                <img src={Img2} alt='image'/>
            </div>
            <div className='gallery-box'>
                <img src={Img3} alt='image'/>
            </div>
            <div className='gallery-box'>
                <img src={Img4} alt='image'/>
            </div>
            <div className='gallery-box'>
                <img src={Img5} alt='image'/>
            </div>
            <div className='gallery-box'>
                <img src={Img6} alt='image'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery;