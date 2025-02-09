import React, { useState, useEffect, useCallback } from "react";
// import "../styles/try3.css";

function CustomCarousel({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const slideCount = React.Children.count(children);

    const slideNext = useCallback(() => {
        setActiveIndex((val) => (val >= slideCount - 1 ? 0 : val + 1));
    }, [slideCount]);

    const slidePrev = () => {
        setActiveIndex((val) => (val <= 0 ? slideCount - 1 : val - 1));
    };

    useEffect(() => {
        const id = setTimeout(slideNext, 2200);
        return () => clearTimeout(id);
    }, [activeIndex, slideNext]);

    return (
        <div className="container__slider">
            <div className="slider-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => (
                    <div className="slider__item" key={index}>
                        {child}
                    </div>
                ))}
            </div>

            <button className="slider__btn-prev" onClick={slidePrev}>{"<"}</button>
            <button className="slider__btn-next" onClick={slideNext}>{">"}</button>
            <div className="slider-dots">
                {Array.from({ length: slideCount }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </div>

    );
}

export default CustomCarousel;