import React, { useState } from "react";
import './style.css'

import scheduleData from './../../data/ScheduleData.json';
import ScheduleDayEvent from "../ScheduleDayEvent";
import ScheduleDaySelector from "../ScheduleDaySelector";

import schedule3bg from '../../assets/images/schedule_bg/schedule-bg.svg';
import scheduleBeginBg from '../../assets/images/schedule_bg/bg-begin.png';
import scheduleEndRBg from '../../assets/images/schedule_bg/bg-end-r.png';
import scheduleEndLBg from '../../assets/images/schedule_bg/bg-end-l.png';
import scheduleMiddleBg from '../../assets/images/schedule_bg/bg-middle.png';
import scheduleMiddleMirrorBg from '../../assets/images/schedule_bg/bg-middle-mirror.png';
import scheduleMobileBg from '../../assets/images/schedule_bg/schedule-bg-rot.svg';
import scheduleMobileCircleBg from '../../assets/images/schedule_bg/schedule-bg-circle.svg';

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

    //const backgroundStyle = schedule3bg;
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
            <div>
                <div className="planning-row-container-circle"><img src={scheduleMobileCircleBg} /></div>
                <div className="planning-row-container">
                    <div className="planning-row-container-bg"><img src={scheduleMobileBg} /></div>

                    {
                        displayMatrix.map((row, div_ind) => {
                            let backgroundStyle;

                            if (displayMatrix.length == 1) {
                                backgroundStyle = schedule3bg;
                            }
                            else {
                                if (div_ind == 0) {
                                    backgroundStyle = scheduleBeginBg;
                                }
                                else if (div_ind == displayMatrix.length - 1) {
                                    if (displayMatrix.length % 2 == 0) {
                                        backgroundStyle = scheduleEndLBg;
                                    } else {
                                        backgroundStyle = scheduleEndRBg;
                                    }
                                }
                                else {
                                    if (div_ind % 2 == 0) {
                                        backgroundStyle = scheduleMiddleMirrorBg;
                                    }
                                    else {
                                        backgroundStyle = scheduleMiddleBg;
                                    }
                                }
                            }

                            return (
                                <div key={div_ind} className="planning-date-program">
                                    <div className="planning-date-program-bg"><img src={backgroundStyle} /></div>
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
                <div className="planning-row-container-circle"><img src={scheduleMobileCircleBg} /></div>

            </div>
        </div>
    );
}