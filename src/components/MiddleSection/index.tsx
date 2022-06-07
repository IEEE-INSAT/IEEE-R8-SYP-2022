import React from 'react';
import TwoElementsBlock from '../TwoElementsBlock';
import './style.css'

import planeIcon from './../../assets/images/plane.svg';
import top_disk from './../../assets/images/browndisk.svg';
import bot_disk from './../../assets/images/bluedisk.svg';

export default function MiddleSection() {
    return (
        <>
            <TwoElementsBlock>
                <div className='schedule-text-section blockElement'>
                    <img src={planeIcon} />
                    <div className="schedule-text-section-title">
                        Arrivals & Check-In
                    </div>
                    <div className="schedule-text-section-comment">
                        Airport<br />07:00 - 14:00
                    </div>
                    <div className='schedule-text-section-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum velit non eros dignissim, ac mollis ligula bibendum. Sed sollicitudin est eros, vel mollis eros aliquam at. Integer lobortis tristique nibh. Cras venenatis lorem id diam luctus, non auctor ex porta. Vivamus laoreet facilisis posuere. Nulla quis fermentum purus. Maecenas ullamcorper
                    </div>
                </div>
                <div className='videoContainer blockElement'>
                    <img className="deco top-disk" src={top_disk} />
                    <img className="deco bottom-disk" src={bot_disk} />

                    <div className="video">
                        <div id="map" className='map2'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880458.4427307894!2d10.132420694009932!3d36.45816594972644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c6d1e93bef%3A0x4153c4733f285343!2sNational%20Institute%20of%20Applied%20Science%20and%20Technology!5e0!3m2!1sen!2stn!4v1650384403836!5m2!1sen!2stn"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </TwoElementsBlock>
        </>
    );
}