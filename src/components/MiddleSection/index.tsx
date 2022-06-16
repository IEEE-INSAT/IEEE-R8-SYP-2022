import React from 'react';
import TwoElementsBlock from '../TwoElementsBlock';
import { IScheduleDescription } from '../../pages/Schedule';
import './style.css';

import top_disk from './../../assets/images/browndisk.svg';
import bot_disk from './../../assets/images/bluedisk.svg';

import planeIcon from '../../assets/images/schedule/plane.svg';
import mealsIcon from '../../assets/images/schedule/meals.svg';
import checkinIcon from '../../assets/images/schedule/checkin.svg';
// import Icon from '../../assets/images/schedule/';
// import Icon from '../../assets/images/schedule/';
// import Icon from '../../assets/images/schedule/';
// import Icon from '../../assets/images/schedule/';
// import Icon from '../../assets/images/schedule/';
// import Icon from '../../assets/images/schedule/';

import ScheduleDescription from './../../data/ScheduleDescription.json';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const icons = {
    plane: planeIcon,
    meals: mealsIcon,
    checkin: checkinIcon,
};

export default function MiddleSection({ scrollRefs }: IScheduleDescription) {
    return (
        <>
            {ScheduleDescription.map((elem, i) => {
                const description = (
                    <div className="schedule-text-section blockElement">
                        {(() => {
                            switch (elem.icon) {
                                case 'plane': {
                                    return <img src={icons.plane} />;
                                }
                                case 'checkin': {
                                    return <img src={icons.checkin} />;
                                }
                                case 'meals': {
                                    return <img src={icons.meals} />;
                                }
                            }
                        })()}
                        <div className="schedule-text-section-title">{elem.title}</div>
                        <div className="schedule-text-section-comment">
                            {elem.comment.map((line, i) => {
                                return (
                                    <>
                                        {line}
                                        {i == elem.comment.length - 1 ? '' : <br />}
                                    </>
                                );
                            })}
                        </div>
                        <div className="schedule-text-section-content">
                            {elem.content.map((line, i) => {
                                return (
                                    <>
                                        {line}
                                        {i == elem.content.length - 1 ? '' : <br />}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                );
                const image = (
                    <div className="videoContainer blockElement">
                        <img className="deco top-disk" src={top_disk} />
                        <img className="deco bottom-disk" src={bot_disk} />

                        <div className="video">
                            {elem.image == 'gps' ? (
                                <div id="map" className="map2">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880458.4427307894!2d10.132420694009932!3d36.45816594972644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c6d1e93bef%3A0x4153c4733f285343!2sNational%20Institute%20of%20Applied%20Science%20and%20Technology!5e0!3m2!1sen!2stn!4v1650384403836!5m2!1sen!2stn"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            ) : (
                                <img className={'videoImage'} src={elem.image} alt="tunisia section" />
                            )}
                        </div>
                    </div>
                );
                return (
                    <div key={i} ref={scrollRefs.current[i]}>
                        <TwoElementsBlock direction={i % 2 == 0 ? '' : 'reverse'}>
                            {i % 2 == 0 ? (
                                <>
                                    {description}
                                    {image}
                                </>
                            ) : (
                                <>
                                    {image}
                                    {description}
                                </>
                            )}
                        </TwoElementsBlock>
                    </div>
                );
            })}
        </>
    );
}
