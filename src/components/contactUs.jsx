import React from 'react';
import Swal from 'sweetalert2';
import "animate.css"
import "../App.css";

export default function ContactUs() {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted'); 

        Swal.fire({
            title: "Form submitted !",
            text: 'Thank you for your message. We will get back to you soon.',
            icon: 'success',
            confirmButtonText: 'OK',
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            },allowOutsideClick:false,
            customClass: {
                container: 'sweet-alert-container', // Custom class for the modal container
                popup: 'sweet-alert-popup', // Custom class for the popup
                confirmButton: 'sweet-alert-confirm-button' // Custom class for the confirm button
            },
         
          })
    };

    return (
        <div className='contact-us'>
            <div className='contact-wrapper'>
                <h2>Contact Us</h2>
                <p>If you have any further inquiries, please let us know by filling the form below</p>
                <form className='contact-frame' onSubmit={handleSubmit}>
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
                    <button className='submit' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
