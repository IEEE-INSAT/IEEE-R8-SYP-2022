import React, { createRef, useRef } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MeetYourDestination from "../../components/MeetYourDestination";
import MiddleSection from "../../components/MiddleSection";
import ScheduleSection from "../../components/ScheduleSection";

import ScheduleDescription from './../../data/ScheduleDescription.json';

export interface IScheduleDescription {
    scrollRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>
}

export default function Schedule() {
    const scrollRefs = useRef([]);

    // Populate scrollable refs, only create them once
    scrollRefs.current = [...Array(ScheduleDescription.length)].map(
        (_, i) => scrollRefs.current[i] ?? createRef()
    );
    return (
        <>
            <Header title={"SCHEDULE"} description={<p>The congress expected schedule</p>} />

            <ScheduleSection scrollRefs={scrollRefs} />
            <MiddleSection scrollRefs={scrollRefs} />
            <MeetYourDestination />

            <Footer />
        </>
    );
}