import React, { ReactElement } from "react";
import './style.css';

import { ReactComponent as PlaneLogo } from "./../../assets/images/plane.svg";
import { ReactComponent as CheckinLogo } from "./../../assets/images/checkin.svg";
import { ReactComponent as Opening } from "./../../assets/images/opening.svg";

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
    "openingCer": ReactElement
} = {
    "plane": <PlaneLogo />,
    "checkin": <CheckinLogo />,
    "openingCer": <Opening />
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
                            case "openingCer": return SCHEDULE_ICONS.openingCer;
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