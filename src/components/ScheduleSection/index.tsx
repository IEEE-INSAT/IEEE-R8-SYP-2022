import React, { useState } from "react";
import './style.css'

import scheduleData from './../../data/ScheduleData.json';
import ScheduleDayEvent from "../ScheduleDayEvent";
import ScheduleDaySelector from "../ScheduleDaySelector";

import schedule3bg from '../../assets/images/schedule_bg/schedule-bg.svg';
import scheduleBeginBg from '../../assets/images/schedule_bg/bg-begin.svg';
import scheduleEndRBg from '../../assets/images/schedule_bg/bg-end-r.svg';
import scheduleEndLBg from '../../assets/images/schedule_bg/bg-end-l.svg';
import scheduleMiddleBg from '../../assets/images/schedule_bg/bg-middle.svg';

type IProgramDays = "1" | "2" | "3" | "4" | "5";

const days: IProgramDays[] = ["1", "2", "3", "4", "5"];

interface IProgram {
    title: string;
    icon: string;
    location: string;
    time: string;
    color: string;
}

export default function ScheduleSection() {
    const [selectedDay, setSelectedDay] = useState("2" as IProgramDays);

    const changeSelectedDay = (day: IProgramDays) => {
        if (scheduleData[day]) {
            setSelectedDay(day);
        }
    }

    //const backgroundStyle = { backgroundImage: `url(${schedule3bg})` };
    const displayMatrix = (scheduleData[selectedDay].program as IProgram[]).reduce(
        (rows, key, index) => (index % 3 == 0 ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        [] as any[]
    ) as IProgram[][];

    console.log(displayMatrix)


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
            <div className="planning-row-container">
                {
                    displayMatrix.map((row, div_ind) => {
                        let backgroundStyle;

                        if (displayMatrix.length == 1) {
                            backgroundStyle = { backgroundImage: `url(${schedule3bg})` };
                        }
                        else {
                            if (div_ind == 0) {
                                backgroundStyle = { backgroundImage: `url(${scheduleBeginBg})` };
                            }
                            else if (div_ind == displayMatrix.length - 1) {
                                if (displayMatrix.length % 2 == 0) {
                                    backgroundStyle = { backgroundImage: `url(${scheduleEndLBg})` };
                                } else {
                                    backgroundStyle = { backgroundImage: `url(${scheduleEndRBg})` };
                                }
                            }
                            else {
                                backgroundStyle = { backgroundImage: `url(${scheduleMiddleBg})` };
                            }
                        }

                        return (
                            <div key={div_ind} style={backgroundStyle} className="planning-date-program">
                                {
                                    row.map((elem, ind) => {
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
                        );
                    })
                }
            </div>
        </div>
    );
}