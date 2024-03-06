import React, {useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Modal from 'react-modal';

function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-logo'>
                HIMAB
            </div>
            <ul className='header-list'>
                <li>
                    <Link to='/' className='header-list-link'>HOME</Link>
                </li>
                <li>
                    <Link to='/menupage' className='header-list-link'>OUR MENU</Link>
                </li>
                <li>
                    <Link to='/shop' className='header-list-link'>SHOP</Link>
                </li>
                <li>
                    <Link to='/gallery' className='header-list-link'>GALLERY</Link>
                </li>
                <li>
                    <Link to='/news' className='header-list-link'>OUR NEWS</Link>
                </li>
                <li>
                    <Link to='/reservation' className='header-list-link'>RESERVATION</Link>
                </li>
                <li>
                    <Link to='/contact' className='header-list-link'>CONTACT US</Link>
                </li>
                <li>
                    <Link to='/cart' className='header-list-link cart-div'>
                        <FaShoppingCart className='cart-icon'/>
                        <div className='cart-length'>
                            <p>0</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
        <div className='header-container-rwd'>
            <div className='header-logo'>
                HIMAB
            </div>
            <CiMenuBurger onClick={() => setModalIsOpen(true)} className='menu-icon'/>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                className='header-modal'
              >
                <div>
                  <IoClose className='close-icon' onClick={() => setModalIsOpen(false)}/>
              <ul className='header-modal-list'>
              <li>
                    <Link to='/' className='header-list-link'>HOME</Link>
                </li>
                <li>
                    <Link to='/ourmenu' className='header-list-link'>OUR MENU</Link>
                </li>
                <li>
                    <Link to='/shop' className='header-list-link'>SHOP</Link>
                </li>
                <li>
                    <Link to='/gallery' className='header-list-link'>GALLERY</Link>
                </li>
                <li>
                    <Link to='/news' className='header-list-link'>OUR NEWS</Link>
                </li>
                <li>
                    <Link to='/reservation' className='header-list-link'>RESERVATION</Link>
                </li>
                <li>
                    <Link to='/contact' className='header-list-link'>CONTACT US</Link>
                </li>
                <li>
                    <Link to='/cart' className='header-list-link cart-div'>
                        <FaShoppingCart className='cart-icon'/>
                        <div className='cart-length'>
                            <p>0</p>
                        </div>
                    </Link>
                </li>
              </ul>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Header