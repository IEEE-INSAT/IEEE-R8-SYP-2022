import React, { ReactElement } from "react";
import './style.css';

import { ReactComponent as PlaneIcon } from "../../assets/images/schedule/plane.svg";
import { ReactComponent as CheckinIcon } from "../../assets/images/schedule/checkin.svg";
import { ReactComponent as MealsIcon } from "../../assets/images/schedule/meals.svg";
import { ReactComponent as BreakIcon } from "../../assets/images/schedule/break.svg";
import { ReactComponent as BreakfastIcon } from "../../assets/images/schedule/breakfast.svg";
import { ReactComponent as DinnerIcon } from "../../assets/images/schedule/dinner.svg";
import { ReactComponent as GalaIcon } from "../../assets/images/schedule/gala.svg";
import { ReactComponent as KeynotesIcon } from "../../assets/images/schedule/keynotes.svg";
import { ReactComponent as LunchIcon } from "../../assets/images/schedule/lunch.svg";
import { ReactComponent as OpeningIcon } from "../../assets/images/schedule/opening.svg";
import { ReactComponent as PreparationsIcon } from "../../assets/images/schedule/preparations.svg";
import { ReactComponent as PartyIcon } from "../../assets/images/schedule/party.svg";
import { ReactComponent as TourIcon } from "../../assets/images/schedule/tour.svg";
import { ReactComponent as TransportIcon } from "../../assets/images/schedule/transport.svg";
import { ReactComponent as TunisianIco } from "../../assets/images/schedule/tunisian.svg";
import { ReactComponent as WorkshopIcon } from "../../assets/images/schedule/workshop.svg";
import { ReactComponent as DepartureIcon } from "../../assets/images/schedule/departure.svg";
 import { ReactComponent as CareerIcon } from "../../assets/images/schedule/career.svg";
import { ReactComponent as PlenaryIcon } from "../../assets/images/schedule/plenary.svg";
import { ReactComponent as PosterIcon } from "../../assets/images/schedule/poster.svg";
import { ReactComponent as MulticultureIcon } from "../../assets/images/schedule/multiculture.svg";

interface IScheduleDayEvent {
    title: string;
    icon: string;
    location: string;
    time: string;
    color: string;
    onClick: () => void;
}

// Lezem ikounou imported bch tnajam ta3mel fill l <svg>
const SCHEDULE_ICONS: {
    "plane": ReactElement,
    "checkin": ReactElement,
    "meals": ReactElement
    "break" : ReactElement,
    "breakfast" : ReactElement,
    "dinner" : ReactElement,
    "gala" : ReactElement,
    "keynotes" : ReactElement,
    "lunch" : ReactElement,
    "opening" : ReactElement,
    "preparations" : ReactElement,
    "party" : ReactElement,
    "tour" : ReactElement,
    "transport" : ReactElement,
    "tunisian" : ReactElement,
    "workshop" : ReactElement,
    "departure" : ReactElement,
    "career" : ReactElement,
    "plenary" : ReactElement,
    "poster" : ReactElement,
    "multiculture" : ReactElement,
} = {
    "plane": <PlaneIcon />,
    "checkin": <CheckinIcon />,
    "meals": <MealsIcon />,
    "break" : <BreakIcon />,
    "breakfast" : <BreakfastIcon/>,
    "dinner" : <DinnerIcon/>,
    "gala" : <GalaIcon/>,
    "keynotes" : <KeynotesIcon/>,
    "lunch" : <LunchIcon/>,
    "opening" : <OpeningIcon/>,
    "preparations" : <PreparationsIcon/>,
    "party" : <PartyIcon/>,
    "tour" : <TourIcon/>,
    "transport" : <TransportIcon/>,
    "tunisian" : <TunisianIco/>,
    "workshop" : <WorkshopIcon/>,
    "departure" : <DepartureIcon/>,
    "career" : <CareerIcon/>,
    "plenary" : <PlenaryIcon/>,
    "poster" : <PosterIcon/>,
    "multiculture" : <MulticultureIcon/>,
}

export default function ScheduleDayEvent({ title, icon, location, time, color, onClick }: IScheduleDayEvent) {
    return (
        <div onClick={onClick} className={"clickable schedule-content-event event-background-color-" + color}>
            <div className="schedule-content-event-title">
                {title}
            </div>
            <div className="schedule-content-event-icon">
                {(
                    () => {
                        switch (icon) {
                            case "plane": return SCHEDULE_ICONS.plane;
                            case "checkin": return SCHEDULE_ICONS.checkin;
                            case "meals": return SCHEDULE_ICONS.meals;
                            case "break": return SCHEDULE_ICONS.break;
                            case "breakfast": return SCHEDULE_ICONS.breakfast;
                            case "dinner": return SCHEDULE_ICONS.dinner;
                            case "gala": return SCHEDULE_ICONS.gala;
                            case "keynotes": return SCHEDULE_ICONS.keynotes;
                            case "lunch": return SCHEDULE_ICONS.lunch;
                            case "opening": return SCHEDULE_ICONS.opening;
                            case "preparations": return SCHEDULE_ICONS.preparations;
                            case "party": return SCHEDULE_ICONS.party;
                            case "tour": return SCHEDULE_ICONS.tour;
                            case "transport": return SCHEDULE_ICONS.transport;
                            case "tunisian": return SCHEDULE_ICONS.tunisian;
                            case "workshop": return SCHEDULE_ICONS.workshop;
                            case "departure": return SCHEDULE_ICONS.departure;
                            case "career": return SCHEDULE_ICONS.career;
                            case "plenary": return SCHEDULE_ICONS.plenary;
                            case "poster": return SCHEDULE_ICONS.poster;
                            case "multiculture": return SCHEDULE_ICONS.multiculture;
                        }
                    }
                )()}
            </div>
            <div className="schedule-content-event-info">
                <div className="schedule-content-event-location">
                    {location}
                </div>
                <div className="schedule-content-event-time">
                    {time}
                </div>
            </div>
        </div>
    );
}