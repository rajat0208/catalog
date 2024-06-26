import React, { useState, useEffect, useRef } from 'react'
import Logo from "../assets/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { FiBook } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoPlayCircleOutline } from "react-icons/io5";
import "../App.css"

export default function Hero() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSearchBar, setShowSearchbar] = useState(false)
    const dropdownRef = useRef(null);
    const searchRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const toggleSearch = () => {
        setShowSearchbar(!showSearchBar)
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }

        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setShowSearchbar(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div className='hero'>
            <div className='hero-overlay'></div>
            <div className='dropdown-header-navigation'>
                <div className='header'>
                    <div className='header-container'>
                        <div className='company-logo'>
                            <img src={Logo} />
                        </div>

                        <div className='navigation'>
                            <div className='nav'>
                                <ul className='nav-links'>
                                    <li><a href='#home'>Home</a></li>
                                    <li><a href='#about-us'>About Us</a></li>
                                    <li><a href='#case-studies'>Case studies</a></li>
                                    <li ref={dropdownRef}>
                                        <a href='#resource' onClick={toggleDropdown} className='resource'>Resources <IoIosArrowDown className="dropdown-icon" size={20} /></a>
                                        {showDropdown && (
                                            <div className='dropdown-content'>
                                                <a href='#'>
                                                    <div className='dropdown'>
                                                        <FiBook className="dropdown-icon2" size={36} color='rgba(0, 41, 83, 0.8)' />
                                                        <div className='dropdown-info'>
                                                            <h3>Blog</h3>
                                                            <p>The latest industry, news, update and info.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href='#'>
                                                    <div className='dropdown'>
                                                        <AiOutlineThunderbolt className="dropdown-icon2" size={36} color='rgba(0, 41, 83, 0.8)' />
                                                        <div className='dropdown-info'>
                                                            <h3>Customer Stories</h3>
                                                            <p>Learn how our customers are making big changes.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href='#'>
                                                    <div className='dropdown'>
                                                        <IoPlayCircleOutline className="dropdown-icon2" size={36} color='rgba(0, 41, 83, 0.8)' />
                                                        <div className='dropdown-info'>
                                                            <h3>Video Tutorials</h3>
                                                            <p>Get up and running on new fetaures and techniques.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                            <div className='search'>
                                <button className='search-btn' onClick={toggleSearch}><CiSearch size={18} color='white' /></button>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='hero-container'>
                <div className='hero-content'>
                {showSearchBar && (
                                    <div className='search-overlay'>
                                        <div className='search-bar' ref={searchRef}>
                                            <input type="text" placeholder="Search..." />
                                            <button className='close-btn' onClick={toggleSearch}>
                                                {/* <FaTimes size={20} /> */}
                                            </button>
                                        </div>
                                    </div>
                                )}
                    <div className='heading-and-supportive-text'>
                        <div className='heading-and-badge'>

                            <h1>Beautiful Analytics To Grow Smarter</h1>
                        </div>
                        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                    </div>
                    <div className='action'>
                        <div className='button'>
                            <button className='catalog-btn'>Why Catalog<FaArrowRight className="catalog-icon" size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
