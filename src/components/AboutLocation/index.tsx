import React from 'react';
import './AboutLocation.css';
import tunis_night from '../../assets/images/tunis-night.png'
import archaelogical_site from '../../assets/images/archaelogical-site.png'
import sidi_bou from '../../assets/images/sidi-bou.png'
import ThemedButton from '../ThemedButton';
import { Link } from 'react-router-dom';



function AboutLocation() {
    return (
        <div className='aboutlocation'>
            <div className="text text-left">
                <h5>ABOUT THE LOCATION</h5>
                <h1>Tunis, Tunisia</h1>
                <p>
                In Tunisia&#39;s capital, the term &#34;living history&#34; really does apply. Here, periods of conquest, trade and independence have woven into the city&#39;s fabric and culture a rich and complex flavor that becomes apparent wherever you explore.
                </p>
                <Link to="/tunisia" ><ThemedButton text='Meet the host country'  onClick={() => window.scrollTo(0, 0)} color="secondary" /></Link> 
            </div>
            <div className="tn-pictures">
                <img className='big-image' src={tunis_night} alt="Tunis in the night"/>
                
                <img className='small-img small-img1' src={sidi_bou} alt="Sidi Bousaid : A village in Tunis"/>
                <img className='small-img small-img2' src={archaelogical_site} alt="An archaeological site in Tunis"/>
                
            </div>
        </div>
    );
}

export default AboutLocation;
