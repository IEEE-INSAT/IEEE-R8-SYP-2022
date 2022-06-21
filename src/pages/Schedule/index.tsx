import React, {createRef, useRef} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MiddleSection from "../../components/MiddleSection";
import ScheduleSection from "../../components/ScheduleSection";
import Gallery from "../../components/Gallery";

import ScheduleDescription from './../../data/ScheduleDescription.json';
import ScrollToTop from "../../components/ScrollToTop";


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
            <Header title={"SCHEDULE"} description={<p>The congress&#39;s expected schedule</p>}/>
            <ScheduleSection scrollRefs={scrollRefs}/>
            <MiddleSection scrollRefs={scrollRefs}/>
            <Gallery
                title="Meet your destination"
                description="An Album of photos of your destination"
            />
            <ScrollToTop/>
            <Footer/>
        </>
    );
}