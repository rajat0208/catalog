import React from 'react'
import "../App.css"
import { FaArrowRight } from "react-icons/fa6";
import News1 from "../assets/news1.jpeg";
import News2 from "../assets/news2.jpeg";
import News3 from "../assets/news3.jpeg";
import News4 from "../assets/news4.jpeg";
import News5 from "../assets/news5.jpeg";
import News6 from "../assets/news6.jpeg";


export default function News() {
    return (
        <div className='news'>
            <div className='wrapper'>
                <h2>News</h2>
                <p> We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.</p>
                <div className='item'>
                    <div className='row'>
                        <div className='newsCard'>
                            <div className='newsContainer'>
                                <div className='newsImage'>
                                    <img src={News1}></img>
                                </div>
                                <h4>Statement from the Catalogue Coalition...</h4>
                                <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...</p>
                                <a href='#' className='news-learn-more'>Learn More<FaArrowRight /></a>
                            </div>
                        </div>
                        <div className='newsCard'>
                        <div className='newsContainer'>
                                <div className='newsImage'>
                                    <img src={News2}></img>
                                </div>
                                <h4>Statement from the Catalogue Coalition...</h4>
                                <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...</p>
                                <a href='#' className='news-learn-more'>Learn More<FaArrowRight /></a>
                            </div>
                        </div>
                        <div className='newsCard'>
                        <div className='newsContainer'>
                                <div className='newsImage'>
                                    <img src={News3}></img>
                                </div>
                                <h4>Statement from the Catalogue Coalition...</h4>
                                <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...</p>
                                <a href='#' className='news-learn-more'>Learn More<FaArrowRight /></a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='newsCard'>
                        <div className='newsContainer'>
                                <div className='newsImage'>
                                    <img src={News4}></img>
                                </div>
                                <h4>Statement from the Catalogue Coalition...</h4>
                                <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...</p>
                                <a href='#' className='news-learn-more'>Learn More<FaArrowRight /></a>
                            </div>
                        </div>
                        <div className='newsCard'>
                        <div className='newsContainer'>
                                <div className='newsImage'>
                                    <img src={News5}></img>
                                </div>
                                <h4>Statement from the Catalogue Coalition...</h4>
                                <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...</p>
                                <a href='#' className='news-learn-more'>Learn More<FaArrowRight /></a>
                            </div>
                        </div>
                        <div className='newsCard'>
                        <div className='newsContainer'>
                                <div className='newsImage'>
                                    <img src={News6}></img>
                                </div>
                                <h4>Statement from the Catalogue Coalition...</h4>
                                <p>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...</p>
                                <a href='#' className='news-learn-more'>Learn More<FaArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='viewAllNews'>
                    <p>View all News</p>
                </div>
            </div>
        </div>
    )
}
