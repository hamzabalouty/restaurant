import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-contact'>
            <div className='footer-left'>
                <h4>Contact Us</h4>
                <p>123 Main Street, Uni 21, New York City</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
            <div className='footer-right'>
                <h4>Follow Us</h4>
                <p>Join us on social networks</p>
                <div className='footer-social'>
                    <FaFacebookF className='fs-icon'/>
                    <FaTwitter className='fs-icon'/>
                    <FaInstagram className='fs-icon'/>
                </div>
            </div>
        </div>
        <div className='footer-copyright'>
            <p>Copyright © 2024 Himab. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;