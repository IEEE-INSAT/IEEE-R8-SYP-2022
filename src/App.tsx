import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import AboutTn from './pages/AboutTn';
import Sponsoring from './pages/Sponsoring';
import AboutUs from './pages/About';
import SpeakersPage from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import MainActivitiesPage from './pages/Main Activites';
import PartnersPage from "./pages/Partners";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";

import './components/Testimonials/Testimonials.css';

function App() {
    return (
        <div className="App">
            <Fade>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/tunisia" element={<AboutTn/>}/>
                        <Route path="/sponsors" element={<Sponsoring/>}/>
                        <Route path="/partners" element={<PartnersPage/>}/>
                        <Route path="/about" element={<AboutUs/>}/>
                        <Route path="/speakers" element={<SpeakersPage/>}/>
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path='*' element={<Navigate replace to="/"/>}/>
                        <Route path="/MainActivities" element={<MainActivitiesPage/>}/>
                    </Routes>
                </BrowserRouter>
            </Fade>
        </div>
    );
}

export default App;
