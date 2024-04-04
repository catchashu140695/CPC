import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    // Set up auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext(); // Move to the next slide every 10 seconds
        }, 10000); // 5000 milliseconds = 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs only once after the initial render

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className={activeIndex === 0 ? 'active' : ''}
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                    className={activeIndex === 1 ? 'active' : ''}
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                    className={activeIndex === 2 ? 'active' : ''}
                ></li>
            </ol>
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                    <img className="d-block w-100" src="img/1.jpg" alt="First slide" />
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                    <img className="d-block w-100" src="img/carousel-2.jpg" alt="Second slide" />
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                    <img className="d-block w-100" src="img/3.jpg" alt="Third slide" />
                </div>
            </div>
            <NavLink className="carousel-control-prev" role="button" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                
            </NavLink>
            <NavLink className="carousel-control-next" role="button" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                
            </NavLink>
        </div>
    );
}

export default Carousel;
