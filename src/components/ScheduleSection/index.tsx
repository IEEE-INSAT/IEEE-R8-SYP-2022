import React, { useState } from "react";
import './style.css'

import scheduleData from './../../data/ScheduleData.json';
import ScheduleDayEvent from "../ScheduleDayEvent";
import ScheduleDaySelector from "../ScheduleDaySelector";

type IProgramDays = "1" | "2" | "3" | "4" | "5";

const days: IProgramDays[] = ["1", "2", "3", "4", "5"]

export default function ScheduleSection() {
    const [selectedDay, setSelectedDay] = useState("2" as IProgramDays);

    const changeSelectedDay = (day: IProgramDays) => {
        if (scheduleData[day]) {
            setSelectedDay(day);
        }
    }

    return (
        <div className="planning-section">
            <div className="planning-month-section">
                AUGUST 2022
            </div>
            <div className="planning-date-section">
                {
                    days.map((day) => {
                        return <ScheduleDaySelector
                            key={day}
                            day={day}
                            date={scheduleData[day].date}
                            selected={day == selectedDay}
                            onclick={() => {
                                setSelectedDay(day)
                            }}
                        />;
                    })
                }
            </div>
            <div className="planning-date-program">
                {
                    scheduleData[selectedDay].program.map((elem, ind) => {
                        return <ScheduleDayEvent
                            key={ind}
                            title={elem.title}
                            time={elem.time}
                            location={elem.location}
                            icon={elem.icon}
                            color={elem.color}
                        />;
                    })
                }
            </div>
        </div>
    );
}