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
import PartnersPage from "./pages/Partners";

import './components/Testimonials/Testimonials.css';


function App() {
    return (
        <div className="App">

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
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;
