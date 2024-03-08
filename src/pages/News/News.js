import React, { useEffect } from 'react';
import './News.css';
import Img1 from '../../assets/news-1.jpg';
import Img2 from '../../assets/restaurant-675x450.jpg';
import Img3 from '../../assets/bar-2-675x450.jpg';
import Img4 from '../../assets/bar-1-675x450.jpg';

function News() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='news'>
      <div className='news-title'>
        <h3>Our News</h3>
      </div>
      <div className='news-container'>
        <div className='news-image'>
          <img src={Img1} alt='image'/>
        </div>
        <div className='news-card'>
          <p>April 3, 2018</p>
          <h4>Where can I get some?</h4>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly…</p>
        </div>
      </div>
      <div className='news-container'>
        <div className='news-card-sec'>
          <p>March 6, 2018</p>
          <h4>Where does it come from?</h4>
          <p>Pellentesque nulla justo, auctor ac maximus sed, tempus sed nibh. Ut elit sapien, ornare et diam ac, efficitur luctus elit. Proin ut nulla consequat, elementum lacus eu, cursus ipsum. Fusce efficitur…</p>
        </div>
        <div className='news-image-sec'>
          <img src={Img2} alt='image'/>
        </div>
      </div>
      <div className='news-container'>
        <div className='news-image'>
          <img src={Img3} alt='image'/>
        </div>
        <div className='news-card'>
          <p>August 5, 2016</p>
          <h4>What is Lorem Ipsum?</h4>
          <p>Pellentesque nulla justo, auctor ac maximus sed, tempus sed nibh. Ut elit sapien, ornare et diam ac, efficitur luctus elit. Proin ut nulla consequat, elementum lacus eu, cursus ipsum. Fusce efficitur…</p>
        </div>
      </div>
      <div className='news-container'>
        <div className='news-card-sec'>
          <p>July 28, 2016</p>
          <h4>Summer Begin!</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
        </div>
        <div className='news-image-sec'>
          <img src={Img4} alt='image'/>
        </div>
      </div>
      <div className='news-card-last'>
        <p>July 16, 2016</p>
        <h4>Hello world!</h4>
        <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
      </div>
    </div>
  )
}

export default News