import React from 'react';
import TwoElementsBlock from '../TwoElementsBlock';
import { IScheduleDescription } from '../../pages/Schedule';
import './style.css';

import top_disk from './../../assets/images/browndisk.svg';
import bot_disk from './../../assets/images/bluedisk.svg';

import PlaneIcon from '../../assets/images/schedule/plane.svg';
import CheckinIcon from '../../assets/images/schedule/checkin.svg';
import MealsIcon from '../../assets/images/schedule/meals.svg';
import BreakIcon from '../../assets/images/schedule/break.svg';
import BreakfastIcon from '../../assets/images/schedule/breakfast.svg';
import DinnerIcon from '../../assets/images/schedule/dinner.svg';
import GalaIcon from '../../assets/images/schedule/gala.svg';
import KeynotesIcon from '../../assets/images/schedule/keynotes.svg';
import LunchIcon from '../../assets/images/schedule/lunch.svg';
import OpeningIcon from '../../assets/images/schedule/opening.svg';
import PreparationsIcon from '../../assets/images/schedule/preparations.svg';
import PartyIcon from '../../assets/images/schedule/party.svg';
import TourIcon from '../../assets/images/schedule/tour.svg';
import TransportIcon from '../../assets/images/schedule/transport.svg';
import TunisianIcon from '../../assets/images/schedule/tunisian.svg';
import WorkshopIcon from '../../assets/images/schedule/workshop.svg';
import DepartureIcon from '../../assets/images/schedule/departure.svg';
import CareerIcon from '../../assets/images/schedule/career.svg';
import PlenaryIcon from '../../assets/images/schedule/plenary.svg';
import PosterIcon from '../../assets/images/schedule/poster.svg';
import MulticultureIcon from '../../assets/images/schedule/multiculture.svg';

import ScheduleDescription from './../../data/ScheduleDescription.json';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const icons = {
    'plane': PlaneIcon,
    checkin: CheckinIcon,
    meals: MealsIcon,
    break: BreakIcon,
    breakfast: BreakfastIcon,
    dinner: DinnerIcon,
    gala: GalaIcon,
    keynotes: KeynotesIcon,
    lunch: LunchIcon,
    opening: OpeningIcon,
    preparations: PreparationsIcon,
    party: PartyIcon,
    tour: TourIcon,
    transport: TransportIcon,
    tunisian: TunisianIcon,
    workshop: WorkshopIcon,
    departure: DepartureIcon,
    career: CareerIcon,
    plenary: PlenaryIcon,
    poster: PosterIcon,
    multiculture: MulticultureIcon,
};

export default function MiddleSection({ scrollRefs }: IScheduleDescription) {
    return (
        <>
            {ScheduleDescription.map((elem, i) => {
                const description = (
                    <div className="schedule-text-section blockElement">
                        <img
                            src={
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                icons[elem.icon]
                            }
                        />
                        {/*{(() => {*/}
                        {/*    switch (elem.icon) {*/}
                        {/*        case 'plane': {*/}
                        {/*            return <img src={icons.plane} />;*/}
                        {/*        }*/}
                        {/*        case 'checkin': {*/}
                        {/*            return <img src={icons.checkin} />;*/}
                        {/*        }*/}
                        {/*        case 'meals': {*/}
                        {/*            return <img src={icons.meals} />;*/}
                        {/*        }*/}
                        {/*    }*/}
                        {/*})()}*/}
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
