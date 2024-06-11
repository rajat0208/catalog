import React from 'react'
import "../App.css"
import Logo from "../assets/logo.png"
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import CC from "../assets/ccLogo.png"
import { FaArrowUp } from "react-icons/fa6";


export default function Footer() {
    console.log('Scrolling to top');
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className='footer'>
            <div className='footer-group'>
                <div className='footer-overlay'></div>
                <div className='footer-wrapper'>
                    <div className='footer-company'>
                        <img src={Logo} className='footer-logo'></img>
                        <div className='footer-description'>
                            <p>We are a collaboration of non-government organisation and professionals working to ensure that government spending. </p>
                        </div>
                        <div className='social-media'>
                            <AiFillTwitterCircle size={36} color='white' />
                            <FaLinkedin size={36} color='white' />
                            <BsYoutube size={36} color='white' />
                        </div>
                    </div>
                    <div className='footer-content'>
                        <div className='footer-section links'>
                            <h3>Links</h3>
                            <ul>
                                <li><a href="#campaigns">Campaigns</a></li>
                                <li><a href="#resources">Resources</a></li>
                                <li><a href="#news">News</a></li>
                                <li><a href="#about-us">About Us</a></li>
                            </ul>
                        </div>
                        <div className='footer-section footerresources'>
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="#transparency-toolkit">Transparency Toolkit</a></li>
                                <li><a href="#evidence">Evidence</a></li>
                                <li><a href="#best-practices">Best Practices</a></li>
                            </ul>
                        </div>
                        <div className='footer-section work'>
                            <h3>Work with Us</h3>
                            <ul>
                                <li><a href="#contact-us">Contact Us</a></li>
                                <li><a href="#join-us">Join Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <div className='copyright-wrapper'>
                    <p>Terms and Conditions</p>
                    <img src={CC}></img>
                </div>
                <div className='scroll-to-top' onClick={scrollToTop}>
                    <FaArrowUp color='grey' />
                </div>
            </div>
        </div>
    )
}
