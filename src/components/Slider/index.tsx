import './style.css';
import React from "react";
import SliderCategoryNameDisplay from './SliderCategoryNameDisplay';
import SliderCategoryContent from './SliderCategoryContent';

interface categoryData {
    title: string,
    picture: string,
    description: string
}

interface categoryItem {
    name: string;
    data: categoryData[];
}

interface ISlider {
    selectedIndex: number;
    slides: categoryItem[];
    setSelectedIndex: (index: number) => void;
}

export default function Slider({ selectedIndex, slides, setSelectedIndex }: ISlider) {
    const leftArrowClick = () => {
        selectedIndex--
        if (selectedIndex < 0) selectedIndex = 2;
        setSelectedIndex(selectedIndex);
    }
    const rightArrowClick = () => {
        selectedIndex = (selectedIndex + 1) % 3;
        setSelectedIndex(selectedIndex);
    }

    return (
        <div className='slider-container'>
            <div className='slider-container-top-bar'>
                <div className='slider-navigation-buttons'>

                </div>
                <div className='category-name-list-display'>
                    {
                        slides.map((value, index) => {
                            return <SliderCategoryNameDisplay
                                name={value.name}
                                isSelected={index == selectedIndex}
                                key={index}
                                onClick={() => {
                                    setSelectedIndex(index);
                                }}
                            />;
                        })
                    }
                </div>
                <div className='slider-navigation-buttons'>
                    <div onClick={leftArrowClick} className='slider-navigation-button'>
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.03742 13.1316L7.64708 12.4874C7.9107 12.2117 7.90523 11.7619 7.63608 11.492L4.32691 8.16081H12.2195C12.5848 8.16081 12.8786 7.85031 12.8786 7.46438V6.53581C12.8786 6.14988 12.5848 5.83939 12.2195 5.83939H4.32691L7.63608 2.50815C7.90247 2.23829 7.90797 1.78852 7.64708 1.51285L7.03742 0.868646C6.78202 0.595868 6.3646 0.595868 6.10647 0.868646L0.767834 6.50969C0.50968 6.77958 0.50968 7.22062 0.767834 7.4934L6.10647 13.1316C6.36186 13.4043 6.77929 13.4043 7.03742 13.1316Z" fill="#959EAD" />
                        </svg>

                    </div>
                    <div onClick={rightArrowClick} className='slider-navigation-button'>
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.01481 13.1316L12.3534 7.49051C12.6116 7.22062 12.6116 6.77958 12.3534 6.5068L7.01481 0.868646C6.75942 0.595868 6.34199 0.595868 6.08386 0.868646L5.4742 1.51285C5.21057 1.78852 5.21604 2.23829 5.48519 2.50815L8.79437 5.83939H0.901765C0.536525 5.83939 0.242676 6.14988 0.242676 6.53581V7.46438C0.242676 7.85031 0.536525 8.16081 0.901765 8.16081H8.79437L5.48519 11.492C5.21881 11.7619 5.21331 12.2117 5.4742 12.4874L6.08386 13.1316C6.33925 13.4043 6.75668 13.4043 7.01481 13.1316Z" fill="#8A422D" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='category-content-display'>
                {
                    slides[selectedIndex].data.map((value, index) => {
                        return <SliderCategoryContent
                            title={value.title}
                            description={value.description}
                            picture={value.picture}
                            key={index}
                        />
                    })
                }
            </div>
        </div>
    );
}