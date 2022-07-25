import React from 'react';
import TwoElementsBlock from '../TwoElementsBlock';
import {IScheduleDescription} from '../../pages/Schedule';
import './style.css';

import top_disk from './../../assets/images/browndisk.svg';
import bot_disk from './../../assets/images/bluedisk.svg';

import {ReactComponent as PlaneIcon} from '../../assets/images/schedule/plane.svg';
import {ReactComponent as CheckinIcon} from '../../assets/images/schedule/checkin.svg';
import {ReactComponent as MealsIcon} from '../../assets/images/schedule/meals.svg';
import {ReactComponent as BreakIcon} from '../../assets/images/schedule/break.svg';
import {ReactComponent as BreakfastIcon} from '../../assets/images/schedule/breakfast.svg';
import {ReactComponent as DinnerIcon} from '../../assets/images/schedule/dinner.svg';
import {ReactComponent as GalaIcon} from '../../assets/images/schedule/gala.svg';
import {ReactComponent as KeynotesIcon} from '../../assets/images/schedule/keynotes.svg';
import {ReactComponent as LunchIcon} from '../../assets/images/schedule/lunch.svg';
import {ReactComponent as OpeningIcon} from '../../assets/images/schedule/opening.svg';
import {ReactComponent as PreparationsIcon} from '../../assets/images/schedule/preparations.svg';
import {ReactComponent as PartyIcon} from '../../assets/images/schedule/party.svg';
import {ReactComponent as TourIcon} from '../../assets/images/schedule/tour.svg';
import {ReactComponent as TransportIcon} from '../../assets/images/schedule/transport.svg';
import {ReactComponent as TunisianIcon} from '../../assets/images/schedule/tunisian.svg';
import {ReactComponent as WorkshopIcon} from '../../assets/images/schedule/workshop.svg';
import {ReactComponent as DepartureIcon} from '../../assets/images/schedule/departure.svg';
import {ReactComponent as CareerIcon} from '../../assets/images/schedule/career.svg';
import {ReactComponent as PlenaryIcon} from '../../assets/images/schedule/plenary.svg';
import {ReactComponent as PosterIcon} from '../../assets/images/schedule/poster.svg';
import {ReactComponent as MulticultureIcon} from '../../assets/images/schedule/multiculture.svg';

import ScheduleDescription from '../../data/program/ScheduleDescription.json';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const icons = {
    plane: <PlaneIcon/>,
    checkin: <CheckinIcon/>,
    meals: <MealsIcon/>,
    break: <BreakIcon/>,
    breakfast: <BreakfastIcon/>,
    dinner: <DinnerIcon/>,
    gala: <GalaIcon/>,
    keynotes: <KeynotesIcon/>,
    lunch: <LunchIcon/>,
    opening: <OpeningIcon/>,
    preparations: <PreparationsIcon/>,
    party: <PartyIcon/>,
    tour: <TourIcon/>,
    transport: <TransportIcon/>,
    tunisian: <TunisianIcon/>,
    workshop: <WorkshopIcon/>,
    departure: <DepartureIcon/>,
    career: <CareerIcon/>,
    plenary: <PlenaryIcon/>,
    poster: <PosterIcon/>,
    multiculture: <MulticultureIcon/>,
};

export default function MiddleSection({scrollRefs}: IScheduleDescription) {
    return (
        <>
            {ScheduleDescription.map((elem, i) => {
                const description = (
                    <div className="schedule-text-section blockElement">
                        {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            icons[elem.icon]
                        }

                        <div className="schedule-text-section-title">{elem.title}</div>
                        <div className="schedule-text-section-comment">
                            {elem.comment.map((line, i) => {
                                return (
                                    <>
                                        {line}
                                        {i == elem.comment.length - 1 ? '' : <br/>}
                                    </>
                                );
                            })}
                        </div>
                        <div className="schedule-text-section-content">
                            {elem.content.map((line, i) => {
                                return (
                                    <>
                                        {line}
                                        {i == elem.content.length - 1 ? '' : <br/>}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                );
                const image = (
                    <div className="videoContainer blockElement">
                        <img className="deco top-disk" src={top_disk}/>
                        <img className="deco bottom-disk" src={bot_disk}/>

                        <div className="video">
                            {elem.image == 'gps' ? (
                                <div id="map" className="map2">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10729.09474066299!2d10.281739008838127!3d36.91954609223963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b4fd16ccc4cd%3A0xb05acea5529e08d1!2sEl%20Mouradi%20Gammarth!5e0!3m2!1sen!2stn!4v1656363671299!5m2!1sen!2stn"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0}}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            ) : (
                                <img className={'videoImage'} src={elem.image} alt="tunisia section"/>
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
