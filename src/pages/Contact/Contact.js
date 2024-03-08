import React, { useEffect } from 'react';
import './Contact.css';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='contact'>
        <div className='contact-title'>
            <h3>Contact Us</h3>
        </div>
        <div className='contact-form'>
            <div className='contact-form-title'>
                <p><span>- </span>Send us a message<span> -</span></p>
                <h3>CONTACT FORM</h3>
            </div>
            <div className='contact-form-inputs'>
                <div className='contact-input'>
                    <input type='text' placeholder='Enter Your Name...'/>
                </div>
                <div className='contact-input'>
                    <input type='email' placeholder='Enter Your Email...'/>
                </div>
                <div className='contact-input'>
                    <input type='phone' placeholder='Enter Your Phone...'/>
                </div>
            </div>
            <div className='contact-form-textarea'>
                <textarea type='text' placeholder='Enter Your Message...'></textarea>
            </div>
            <button>SEND MESSAGE</button>
        </div>
        <div className="contact-map">
          <iframe
            className="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=cairo&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
    </div>
  )
}

export default Contact;