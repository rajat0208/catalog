import React ,{useRef} from 'react'
import "../App.css"
import Layers from "../assets/layers.png"
import Quotient from "../assets/quotient.png"
import Sisyphus from "../assets/sisyphus.png"
import Circoole from "../assets/circooles.png"
import Hourglass from "../assets/hourglass.png"
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

export default function Identity() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -200, 
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 200, 
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className='identity'>
            <div className='frame'>
            <FaAnglesLeft className="arrow arrow-left" onClick={scrollLeft} />
            <div className='slider' ref={sliderRef}>
                <div className='identity-logo'>
                    <img src={Layers} className='logoMark'></img>
                    <div className='logoType'>
                        <p>Layers</p>
                    </div>
                </div>
                <div className='identity-logo'>
                <img src={Quotient} className='logoMark'></img>
                    <div className='logoType'>
                        <p>Quotient</p>
                    </div>
                </div>
                <div className='identity-logo'>
                <img src={Sisyphus} className='logoMark'></img>
                    <div className='logoType'>
                        <p>Sisyphus</p>
                    </div>
                </div>
                <div className='identity-logo'>
                <img src={Circoole} className='logoMark'></img>
                    <div className='logoType'>
                        <p>Circooles</p>
                    </div>
                </div>
                <div className='identity-logo'>
                <img src={Hourglass} className='logoMark'></img>
                    <div className='logoType'>
                        <p>Hourglass</p>
                    </div>
                </div>
                </div>
                <FaAnglesRight className="arrow arrow-right" onClick={scrollRight} />
            </div>
        </div>
    )
}

