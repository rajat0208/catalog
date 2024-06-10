import React from 'react';
import "../App.css";

export default function ContactUs() {
    return (
        <div className='contact-us'>
            <div className='contact-wrapper'>
                <h2>Contact Us</h2>
                <p>If you have any further inquiries, please let us know by filling the form below</p>
                <div className='contact-frame'>
                    <div className='name'>
                        <div className='form-field'>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" required />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" required />
                        </div>
                    </div>
                    <div className='form-field'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className='form-field'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                </div>
                
            </div>
                    <button className='submit'>Submit</button>
        </div>
    );
}
