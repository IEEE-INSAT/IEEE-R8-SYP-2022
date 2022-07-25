import './style.css';
import React, { useState } from "react";
import Slider from '../Slider';
import categories from '../../data/Abouts and other fixed files/AboutUsSliderData.json';

export default function SliderSectionAboutUs() {
    const [selectedCategory, setSelectedCategory] = useState(0);

    const setSelectedIndex = (index: number) => {
        setSelectedCategory(index)
    }
    return (
        <div className='slider-section-about-us'>
            <Slider
                selectedIndex={selectedCategory}
                slides={categories}
                setSelectedIndex={setSelectedIndex}
            />
        </div>
    );
}