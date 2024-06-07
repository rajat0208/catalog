import React,{useState} from 'react'
import Logo from "../assets/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import "../App.css"

export default function Hero() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }
  return (
    <div className='hero'>
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
                                <li><a href='#resource' onClick={toggleDropdown} className='resource'>Resources <IoIosArrowDown className="dropdown-icon" size={20}  /></a>
                                    {showDropdown && (
                                        <div className='dropdown-content'>
                                            <a href='#'>Link1</a>
                                            <a href='#'>Link2</a>
                                            <a href='#'>Link3</a>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className='search'>
                            <CiSearch size={23} color='white'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className='hero-container'>
            <div className='hero-content'>
                <div className='heading-and-supportive-text'>
                    <div className='heading-and-badge'>
                        <h1>Beautiful Analytics To Grow Smarter</h1>
                    </div>
                    <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                </div>
                <div className='action'>
                    <div className='button'>
                        <button className='catalog-btn'>Why Catalog<FaArrowRight size={20}/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
