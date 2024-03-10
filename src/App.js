import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Arrowup from './components/Arrowup/Arrowup';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Reservation from './pages/Reservation/Reservation';
import News from './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/reservation' element={<Reservation />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Arrowup/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
