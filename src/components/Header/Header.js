import React, {useState} from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Modal from 'react-modal';
import { useSelector } from "react-redux";

function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const cart = useSelector((state) => state.cart);

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-logo'>
                HIMAB
            </div>
            <ul className='header-list'>
                <li>
                    <NavLink to='/' className='header-list-link'>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/menu' className='header-list-link'>OUR MENU</NavLink>
                </li>
                <li>
                    <NavLink to='/shop' className='header-list-link'>SHOP</NavLink>
                </li>
                <li>
                    <NavLink to='/gallery' className='header-list-link'>GALLERY</NavLink>
                </li>
                <li>
                    <NavLink to='/news' className='header-list-link'>OUR NEWS</NavLink>
                </li>
                <li>
                    <NavLink to='/reservation' className='header-list-link'>RESERVATION</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='header-list-link'>CONTACT US</NavLink>
                </li>
                <li>
                    <NavLink to='/cart' className='header-list-link cart-div'>
                        <FaShoppingCart className='cart-icon'/>
                        <div className='cart-length'>
                            <p>{cart.length}</p>
                        </div>
                    </NavLink>
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
                    <NavLink to='/' className='header-list-link'>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/menu' className='header-list-link'>OUR MENU</NavLink>
                </li>
                <li>
                    <NavLink to='/shop' className='header-list-link'>SHOP</NavLink>
                </li>
                <li>
                    <NavLink to='/gallery' className='header-list-link'>GALLERY</NavLink>
                </li>
                <li>
                    <NavLink to='/news' className='header-list-link'>OUR NEWS</NavLink>
                </li>
                <li>
                    <NavLink to='/reservation' className='header-list-link'>RESERVATION</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='header-list-link'>CONTACT US</NavLink>
                </li>
                <li>
                    <NavLink to='/cart' className='header-list-link cart-div'>
                        <FaShoppingCart className='cart-icon'/>
                        <div className='cart-length'>
                            <p>{cart.length}</p>
                        </div>
                    </NavLink>
                </li>
              </ul>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Header