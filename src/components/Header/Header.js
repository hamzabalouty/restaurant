import React, {useState} from 'react';
import './Header.css';
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
                    <a href='#' className='header-list-link'>HOME</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>OUR MENU</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>SHOP</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>GALLERY</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>OUR NEWS</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>RESERVATION</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>CONTACT US</a>
                </li>
                <li>
                    <a href='#' className='header-list-link cart-div'>
                        <FaShoppingCart className='cart-icon'/>
                        <div className='cart-length'>
                            <p>0</p>
                        </div>
                    </a>
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
                    <a href='#' className='header-list-link'>HOME</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>OUR MENU</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>SHOP</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>GALLERY</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>OUR NEWS</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>RESERVATION</a>
                </li>
                <li>
                    <a href='#' className='header-list-link'>CONTACT US</a>
                </li>
                <li>
                    <a href='#' className='header-list-link cart-div'>
                        <FaShoppingCart className='cart-icon'/>
                        <div className='cart-length'>
                            <p>0</p>
                        </div>
                    </a>
                </li>
            </ul>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Header