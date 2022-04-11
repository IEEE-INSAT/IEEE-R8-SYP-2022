import React from 'react';
import './AboutLocation.css';
import tunis_night from '../../assets/images/tunis-night.png'
import archaelogical_site from '../../assets/images/archaelogical-site.png'
import sidi_bou from '../../assets/images/sidi-bou.png'
import ThemedButton from '../ThemedButton';



function AboutLocation() {
    return (
        <div className='aboutlocation'>
            <div className="text text-left">
                <h5>ABOUT THE LOCATION</h5>
                <h1>Tunis, Tunisia</h1>
                <p>
                    Tunis is the sprawling capital of Tunisia, a country in North Africa.
                    It sits along Lake Tunis, just inland from the Mediterranean Sea&apos;Gulf of Tunis.
                    It&apos;home to a centuries-old medina and the Bardo, an archaeology museum where celebrated Roman mosaics are displayed in a 15th-century palace complex.
                    The parklike ruins of ancient Carthage sit in the city&apos;s northern suburbs.
                </p>
                <ThemedButton text='Meet the venue' onClick={() => alert("meet venue")} color="secondary" />
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