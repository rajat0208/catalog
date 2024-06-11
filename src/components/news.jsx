import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import "../App.css"
import { FaArrowRight } from "react-icons/fa6";



export default function News() {

    const [news,setNews]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayedNewsCount, setDisplayedNewsCount] = useState(6);
    const [showAllNews, setShowAllNews] = useState(false);
    const [expandedHeight, setExpandedHeight] = useState(false);
    const newsRef = useRef(null);

    useEffect(()=>{
        axios.get("https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json")
        .then(response =>{
            console.log('Fetched data:', response.data);
            setNews(response.data.news || [])
            setLoading(false);
        })
        .catch(error => {
            console.error('There was an error fetching the news!', error);
            setLoading(false);
        });
    },[]);

    useEffect(() => {
        const handleScroll = () => {
            if (newsRef.current) {
                const { scrollHeight, clientHeight, scrollTop } = newsRef.current;
                const scrollOffset = 200; 
                if (scrollHeight - scrollTop <= clientHeight + scrollOffset) {
                    setShowAllNews(true);
                }
            }
        };

        if (newsRef.current) {
            newsRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (newsRef.current) {
                newsRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleViewAllNews = () => {
        console.log("shwo news")
        setDisplayedNewsCount(news.length);
        setShowAllNews(true);
    };

    if (loading) {
        return <p>Loading news...</p>;
    }

    if (error) {
        return <p>Error fetching news: {error}</p>;
    }


    if (!Array.isArray(news)) {
        return <p>No news available.</p>;
    }
    return (
        <div className={`news ${expandedHeight ? 'expanded' : ''}`}>
            <div className='wrapper'>
                <h2>News</h2>
                <p> We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.</p>
                <div className='item' ref={newsRef}>
                {news.slice(0, displayedNewsCount).map((article, index) =>  (
                            <div className='row' key={index}>
                                <div className='newsCard'>
                                    <div className='newsContainer'>
                                        <div className='newsImage'>
                                            <img src={article.image} alt={article.title} />
                                        </div>
                                        <h4>{article.title}</h4>
                                        <p>{article.content.slice(0, 100)}...</p>
                                        <a href='#' className='news-learn-more'>
                                            Learn More<FaArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                      
                    ))}
                </div>          
                {!showAllNews && (
                    <div className='viewAllNews' onClick={handleViewAllNews}>
                        <p>View all News</p>
                    </div>
                )}
            </div>
        </div>
    )
}
