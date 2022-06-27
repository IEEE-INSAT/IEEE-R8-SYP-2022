import React from 'react';
import './index.css';
import SpeakerGrid from '../SpeakerGrid';
import ThemedButton from '../ThemedButton';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

function Speakers(props) {
     /* eslint-disable react/prop-types */
    const mobile = window.matchMedia('all and (max-width: 480px)');
    const limit=mobile.matches?props.limit&&4:props.limit&&9;
    const button=props.limit?
        <Fade>
            <Link to="/Speakers" >
                <ThemedButton text="show more" mode="light" color="secondary" onClick={()=>window.scrollTo(0, 0)} style={{marginTop:"30px", opacity:"80%"}} />
            </Link>
        </Fade> :"";

    return (
        <div className="speakers-container">
            <SpeakerGrid limit={limit} />
            {button}
        </div>
    );
}

export default Speakers;


