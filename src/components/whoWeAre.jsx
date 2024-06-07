import React from 'react'
import "../App.css"
import { FaArrowRight } from "react-icons/fa6";
import WhoWeARe1 from "../assets/whoweare1.jpeg"
import WhoWeARe2 from "../assets/whoweare2.jpeg"
import WhoWeARe3 from "../assets/whoweare3.jpeg"
import WhoWeARe4 from "../assets/whoweare4.jpeg"


export default function WhoWeAre() {
    return (
        <div className='whoWeAre'>
            <div className='whoWeAre-content'>
                <div className='whoWeAre-heading'>
                    <h2>Who we are</h2>
                    <p>
                        We are a collaboration of Non Govt.  and professionals working to ensure that government spending is done fairly, openly, efficiently, and creates the best value for money and best outcomes for Europe. We are working at the national and EU levels to advance the principles of openness in spending of funds, procurement, and company ownership within the EU.
                    </p>
                </div>
                <a href='#' className='see-more'>See More<FaArrowRight /></a>
            </div>
            <div className='whoWeAre-images'>
                <div className='column1'>
                    <div className='image-container'>
                        <img src={WhoWeARe1}></img>
                        <h4>Adriana Homolova</h4>
                    </div>
                    <div className='image-container'>
                    <img src={WhoWeARe2}></img>
                    <h4>Karolis Granickas</h4>
                        </div>
                </div>
                <div className='column2'>
                    <div className='image-container'>
                    <img src={WhoWeARe3}></img>
                    <h4>Sandor Lederer</h4>
                    </div>
                    <div className='image-container'>
                    <img src={WhoWeARe4}></img>
                    <h4>Zara Montgomery</h4>
                        </div>
                </div>
            </div>

        </div>
    )
}
