import React from 'react'
import "../App.css"
import Image1 from "../assets/campaign1.jpeg"
import Image2 from "../assets/campaign2.jpeg"
import Image3 from "../assets/campaign3.jpeg"
import { FaArrowRight } from "react-icons/fa6";

export default function Feature() {
    return (
        <div className='feature-section'>

            <div className='feature-container'>
                <div className='feature-content'>
                    <div className='feature-heading-and-supportive-text'>
                        <div className='feature-heading'>
                            <h2>Campaigns</h2>
                        </div>
                        <div className='feature-support-text'>
                            <p>We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='feature-row'>
                <div className='campaign-card'>
                    <div className='image-placeholder'>
                        <img src={Image1}></img>
                    </div>
                    <div className='testimonial'>
                        <h4>Open Data Directive</h4>
                        <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, </p>
                    </div>
                    <div className='link'>
                        <a href='#' className='learn-more'>Learn More<FaArrowRight/></a>
                    </div>
                </div>
                <div className='campaign-card'>
                    <div className='image-placeholder'>
                        <img src={Image2}></img>
                    </div>
                    <div className='testimonial'>
                        <h4>Beneficial Ownership</h4>
                        <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, </p>
                    </div>
                    <div className='link'>
                    <a href='#' className='learn-more'>Learn More<FaArrowRight/></a>
                    </div>
                </div>
                <div className='campaign-card'>
                    <div className='image-placeholder'>
                        <img src={Image3}></img>
                    </div>
                    <div className='testimonial'>
                        <h4>EU Recovery Transparency</h4>
                    <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, </p>
                    </div>
                    <div className='link'>
                    <a href='#' className='learn-more'>Learn More<FaArrowRight/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
