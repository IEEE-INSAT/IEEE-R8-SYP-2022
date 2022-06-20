import React from "react";
import './style.css'

interface IScheduleDaySelector {
    day: string;
    date: { day: string; nb: number; };
    selected: boolean;
    onclick: () => void;
}

export default function ScheduleDaySelector({ day, date, selected, onclick }: IScheduleDaySelector) {
    return (
        <div onClick={onclick} className={"schedule-day-button-area " + (selected ? "selected-day-button" : "")}>
            <div className="schedule-selection-day">
                DAY {day}
            </div>
            <div className="schedule-day-button">
                <div>{date.day}</div>&nbsp;{date.nb}<sup>{date.nb == 3 ? 'rd' : 'th' }</sup>&nbsp;
            </div>
        </div>
    );
}