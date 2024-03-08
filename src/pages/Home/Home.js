import React, { useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import Landing from '../../components/Landing/Landing';
import Menu from '../../components/Menu/Menu';
import Slider from '../../components/Slider/Slider';
import Swiper from '../../components/Swiper/Swiper';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Landing />
      <Slider />
      <Swiper />
      <Menu />
      <Cards />
    </>
  )
}

export default Home;