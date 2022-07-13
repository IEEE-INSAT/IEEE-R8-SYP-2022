import React, {useEffect, useState} from "react";
import './ScrollButton.css';
import {ReactComponent as ArrowUp} from '../../assets/angles-up-solid.svg';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 1300) {
            setIsVisible(() => true);
        } else {
            setIsVisible(() => false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 600,
            behavior: "smooth",
        });
    };
    return (
        <div onClick={scrollToTop} className={`scroll-button-container `}>
            <div className={`scroll-icon-style ${isVisible ? 'visible' : 'invisible'}`}>
                <ArrowUp/>
            </div>
        </div>
    );
}
