import React, { createRef, useRef } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MiddleSection from '../../components/MiddleSection';
import ScheduleSection from '../../components/ScheduleSection';
import Gallery from '../../components/Gallery';

import ScheduleDescription from '../../data/program/ScheduleDescription.json';
import ScrollToTop from '../../components/ScrollToTop';

export interface IScheduleDescription {
    scrollRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
}

export default function Schedule() {
    const scrollRefs = useRef([]);

    // Populate scrollable refs, only create them once
    scrollRefs.current = [...Array(ScheduleDescription.length)].map((_, i) => scrollRefs.current[i] ?? createRef());
    return (
        <>
            <Header
                title={'SCHEDULE'}
                description={
                    <p>
                        Find out more in a{' '}
                        <a
                            style={{ color: '#0042a5' }}
                            href="https://drive.google.com/file/d/1ekD-eG9PNZbE1VwE__z1rP1vzBP73Xry/view"
                        >
                            more detailed version
                        </a>{' '}
                        of the shcedule
                    </p>
                }
            />
            <ScheduleSection scrollRefs={scrollRefs} />
            <MiddleSection scrollRefs={scrollRefs} />
            <Gallery title="Meet your destination" description="An Album of photos of your destination" />
            <ScrollToTop />
            <Footer />
        </>
    );
}
