import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MeetYourDestination from "../../components/MeetYourDestination";
import MiddleSection from "../../components/MiddleSection";
import ScheduleSection from "../../components/ScheduleSection";

export default function Schedule() {
    return (
        <>
            <Header title={"SCHEDULE"} description={<p>The congress expected schedule</p>} />

            <ScheduleSection />
            <MiddleSection />
            <MeetYourDestination />

            <Footer />
        </>
    );
}