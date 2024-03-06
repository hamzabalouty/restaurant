import React from 'react';
import './Reservation.css';
import { FaPhone, FaClock } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

function Reservation() {
  return (
    <div className='reservation'>
        <div className='reservation-title'>
            <h3>Open Table Reservation</h3>
        </div>
        <div className='reservation-header'>
            <p><span>- </span>Book a Table<span> -</span></p>
            <h3>OPEN TABLE</h3>
        </div>
        <div className='reservation-inputs'>
            <div className='reservation-input'>
                <input type='date' />
            </div>
            <div className='reservation-input'>
                <input type='time' placeholder='Enter Your Email...'/>
            </div>
            <select className='reservation-input' id="pet-select">
                <option className='resevation-opt' value="">6 People</option>
                <option className='resevation-opt' value="1">1 People</option>
                <option className='resevation-opt' value="2">2 People</option>
                <option className='resevation-opt' value="3">3 People</option>
                <option className='resevation-opt' value="4">4 People</option>
                <option className='resevation-opt' value="5">5 People</option>
                <option className='resevation-opt' value="6">6 People</option>
                <option className='resevation-opt' value="7">7 People</option>
                <option className='resevation-opt' value="8">8 People</option>
                <option className='resevation-opt' value="9">9 People</option>
                <option className='resevation-opt' value="10">10 People</option>
            </select>
        </div>
        <input className='reservation-btn' type='submit' placeholder='Find A Table'/>
        <div className='reservation-header'>
            <p><span>- </span>Visit Us<span> -</span></p>
            <h3>OUR LOCATION</h3>
        </div>
        <div className='reservation-container'>
            <div className='reservation-box'>
                <div className='reservation-icons'>
                    <FaPhone className='phone-icon'/>
                </div>
                <div className='reservation-content'>
                    <h4>PHONE</h4>
                    <p>+20 01097798409</p>
                </div>
            </div>
            <div className='reservation-box'>
                <div className='reservation-icons'>
                    <IoLocation className='phone-icon'/>
                </div>
                <div className='reservation-content'>
                    <h4>ADDRESS</h4>
                    <p>Aga Dakahlia Egypt</p>
                </div>
            </div>
            <div className='reservation-box'>
                <div className='reservation-icons'>
                    <FaClock className='phone-icon'/>
                </div>
                <div className='reservation-content'>
                    <h4>WORKING HOURS</h4>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reservation;