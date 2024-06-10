import React from 'react'
import "../App.css"
import { FaArrowRight } from "react-icons/fa6";
import Tools from "../assets/tools.png";
import Note from "../assets/notes.png";
import Checker from "../assets/checkbox.png"

export default function Resources() {
    return (
        <div className='resources'>
            <div className='resource-wrapper'>
                <h2>Latest Resources</h2>
                <p> The latest resources includes Transparency Toolkit, Evidence, Best Practices</p>
                <div className="resource-item">
                    <div className='resourceCard'>
                        <div className='resourceContainer'>
                            <div className='resourceImage'>
                                <img src={Tools}></img>
                                <h4>Tool</h4>
                            </div>
                            <h3>Defence Elvis</h3>
                            <p>It allows creating networks of public spending on goods services used in defense in 28 EU countries...</p>
                            <a href='#' className='resource-learn-more'>Learn More<FaArrowRight /></a>
                        </div>
                    </div>
                    <div className='resourceCard'>
                        <div className='resourceContainer'>
                            <div className='resourceImage'>
                                <img src={Note}></img>
                                <h4>Notes</h4>
                            </div>
                            <h3>Notes</h3>
                            <p>It allows creating networks of public spending on goods services used in defense in 28 EU countries...</p>
                            <a href='#' className='resource-learn-more'>Learn More<FaArrowRight /></a>
                        </div>
                    </div>
                    <div className='resourceCard'>
                        <div className='resourceContainer'>
                            <div className='resourceImage'>
                                <img src={Checker}></img>
                                <h4>Checker</h4>
                            </div>
                            <h3>Check Box</h3>
                            <p>It allows creating networks of public spending on goods services used in defense in 28 EU countries...</p>
                            <a href='#' className='resource-learn-more'>Learn More<FaArrowRight /></a>
                        </div>
                    </div>
                    
                </div>
                <div className='viewAllNews'>
                    <p>View all Resources</p>
                </div>
            </div>

        </div>
    )
}
