import React from 'react';
import './MeetYourDestination.css';
import airport_night from '../../assets/images/destination/airport-night.png' ;
import airport_day from '../../assets/images/destination/airport-day.png' ;
import airport_tower from '../../assets/images/destination/airport-tower.png' ;
import plane from '../../assets/images/destination/plane.png' ;
import ThemedButton from '../ThemedButton';
import { Link } from 'react-router-dom';



function MeetYourDestination() {
    return (
        <div className='destination'>
            <div className='dest-title'>
                <h5>PHOTOS</h5>
                <h1>Meet your destination</h1>
                <h6>An Album of photos of your destination</h6>
                <br />
            </div>
            <div className="dest-tn-pictures">
                <img className='dest-big-image-left' src={airport_day} alt="Tunis Carthage airport by day" /> 
                <img className='dest-big-image' src={airport_night} alt="Tunis Carthage airport by night"/>
                
                <img className='dest-small-img dest-small-img1' src={plane} alt="planes in Tunis Carthage airport"/>
                <img className='dest-small-img dest-small-img2' src={airport_tower} alt="A control tower in Tunis Carthage airport"/>
                
            </div>
        </div>
    );
}

export default MeetYourDestination;
