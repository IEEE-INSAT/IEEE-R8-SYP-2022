import './index.css';
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Reveal from 'react-reveal/Reveal';
interface SpeakerCardProps{
    name : string, linkedin : string, description : string, highlight : string, tutorial : boolean,image_dir : string
}
function SpeakerCard(props:SpeakerCardProps) {
    /* eslint-disable react/prop-types */
    const [hovered, setHover] = useState(false);
    const { name, linkedin, description, highlight, tutorial,image_dir } = props;
    const path=image_dir+name;

    //for handling different screen input
    const touchSupport = window.matchMedia('(hover: none)');
    const handleClick = () => {
        if (touchSupport.matches) setHover(hovered ? false : true);
    };
    const handleHover = () => {
        if (!touchSupport.matches) setHover(true);
    };

    //setting optional tutorial on touch displays
    
    //optimization : the x button and tutorial are only added to the document if touch support matches
    const Xbutton = touchSupport.matches ? (
        <div className="SpeakerCardX">
            <i className="fa-solid fa-circle-xmark"></i>
        </div>
    ) : (
        <span></span>
    );
    const Tutorial =
        touchSupport.matches && tutorial ? (
            <Reveal effect="inAnimation" duration={3000} delay={1000}>
                <div className="Speakertutorial">
                    {pointer() /*defined below */} 
                    <p>Touch for details</p>
                </div>
            </Reveal>
        ) : (
           ""
        );

    return (
        <Zoom>
            <div
                className={`card${hovered ? ' cardHovered' : ''}`}
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(203, 138, 78, 0.69) 0%, rgba(203, 138, 78, 0) 40%) , url("${path+'.jpg'}") ,url("${path+'.png'}") ,url("https://de2g2pzerdhu6.cloudfront.net/wp-content/uploads/2019/05/dummy-man-570x570.png")`,
                }}
                onMouseEnter={handleHover}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
            >
                <div className="speakerCardBlur">
                    {Tutorial}

                    <div className="speakerDescription">
                        <a target="_blank" rel="noreferrer" href={linkedin} style={{ lineHeight: '3em' }}>
                            {' '}
                            <i className="fa-brands fa-linkedin SpeakerIcon"></i>
                        </a>
                        <p>{description && description.substring(0, 370)}</p>
                        {Xbutton}
                    </div>
                    <div className="SpeakerCardRow" style={{ margin: '10px' }}>
                        <div className="SpeakerCardText">
                            <b>{name}</b>
                            <br/>
                            {highlight}
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
}

export default SpeakerCard;

//credits for the tap animation : https://codepen.io/gracelle/pen/MeNjQR
function pointer(){
    return(    
        <div className="wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle className="tap-1" cx="89.43" cy="64.48" r="19.46" />
                <path
                    className="hand-tap"
                    d="M139.93,102.68,98.81,95.75V65.2A9.25,9.25,0,0,0,89.56,56h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,111.77c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,102.68Z"
                />
            </svg>
        </div>
)}