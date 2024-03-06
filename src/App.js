import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Arrowup from './components/Arrowup/Arrowup';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import menuPage from './pages/menuPage/menuPage';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/our-menu' element={<menuPage />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Arrowup/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
