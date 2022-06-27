import React, {useEffect, useRef, useState} from "react";
import {IScheduleDescription} from "../../pages/Schedule";
import ScheduleDayEvent from "../ScheduleDayEvent";
import ScheduleDaySelector from "../ScheduleDaySelector";
import './style.css'

import scheduleData from './../../data/ScheduleData.json';

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
    scrollRefInd: number;
}

export default function ScheduleSection({scrollRefs}: IScheduleDescription) {

    const updateDisplayMatrix = () => (scheduleData[selectedDay].program as IProgram[]).reduce(
        (rows, key, index) => {
            if (index % 3 === 0)
                rows.push([key]);
            else
                rows[rows.length - 1].push(key);
            return rows;
        }, [] as any[]
    ) as IProgram[][];


    const [selectedDay, setSelectedDay] = useState("1" as IProgramDays);
    const [selectedEvent, setSelectedEvent] = useState([0, 0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [displayMatrix, setDisplayMatrix] = useState(updateDisplayMatrix());

    const displayMatrixRef = useRef([...displayMatrix]);
    const isReversedRef = useRef(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 600);
        });
        return window.removeEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 600);
        });
    }, []);

    useEffect(() => {
        displayMatrixRef.current = updateDisplayMatrix();
        setDisplayMatrix(displayMatrixRef.current);
    }, [selectedDay]);

    useEffect(() => {
        // The idea behind this is, when on big screens (>=600px) every matrix row with an odd index must be displayed
        // from right to left, that's what this code is doing, reversing odd rows elements order.
        // However, when on small screens (<= 600px) the schedule timeline is displayed from top to bottom.
        // That means, we don't need to change the order of the matrix elements in any way.
        // So the changes I mentioned earlier (reversing odd rows order) need to be reverted.
        // The row reversing must be done when changing the selected day too.
        // As for the use of useRef and useState at the same time, It was used because there was a bug where the state of the matrix
        // inside the useEffect hook wasn't changing for some reason, hence the use of useRef.
        // And I kept the State hook to re-render when the matrix changes.

        if (!isMobile && !isReversedRef.current || isMobile && isReversedRef.current) {
            displayMatrixRef.current = displayMatrixRef.current.map((row, index) => {
                return (index % 2 === 1) ? row.reverse() : row;
            });
            isReversedRef.current = !isReversedRef.current;
        }
        setDisplayMatrix(displayMatrixRef.current);
    }, [isMobile, selectedDay]);

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
                                isReversedRef.current = false;
                                setSelectedDay(day);
                                setSelectedEvent([0, 0]);
                            }}
                        />;
                    })
                }
            </div>
            <div>
                <div className="planning-row-container-circle"><img src={scheduleMobileCircleBg}/></div>
                <div className="planning-row-container">
                    <div className="planning-row-container-bg"><img src={scheduleMobileBg}/></div>

                    {

                        displayMatrixRef.current.map((row, div_ind) => {
                            let backgroundStyle;
                            if (displayMatrixRef.current.length == 1) {
                                backgroundStyle = schedule3bg;
                            } else {
                                if (div_ind == 0) {
                                    backgroundStyle = scheduleBeginBg;
                                } else if (div_ind == displayMatrixRef.current.length - 1) {
                                    if (displayMatrixRef.current.length % 2 == 0) {
                                        backgroundStyle = scheduleEndLBg;
                                    } else {
                                        backgroundStyle = scheduleEndRBg;
                                    }
                                } else {
                                    if (div_ind % 2 == 0) {
                                        backgroundStyle = scheduleMiddleMirrorBg;
                                    } else {
                                        backgroundStyle = scheduleMiddleBg;
                                    }
                                }
                            }

                            return (
                                <div key={div_ind} className="planning-date-program">
                                    <div className="planning-date-program-bg"><img src={backgroundStyle}/></div>
                                    {
                                        row.map((elem, ind) => {

                                            return <ScheduleDayEvent
                                                key={ind}
                                                title={elem.title}
                                                time={elem.time}
                                                location={elem.location}
                                                icon={elem.icon}
                                                color={selectedEvent[0] == div_ind && selectedEvent[1] == ind ? "special" : "white"}
                                                onClick={() => {
                                                    scrollRefs.current[elem.scrollRefInd].current?.scrollIntoView({
                                                        behavior: "smooth"
                                                    })
                                                    setSelectedEvent([div_ind, ind])
                                                }}
                                            />;
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className="planning-row-container-circle"><img src={scheduleMobileCircleBg}/></div>

            </div>
        </div>
    );
}