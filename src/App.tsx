import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import AboutTn from './pages/AboutTn';
import ApplyForFunding from './pages/ApplyForFunding';
<<<<<<< HEAD
import Sponsoring from './pages/Sponsoring';
=======
import AboutUs from './pages/About';
>>>>>>> origin/AboutUs

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
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tunisia" element={<AboutTn />} />
          <Route path="/applyforfunding" element={<ApplyForFunding />} />
<<<<<<< HEAD
          <Route path="/sponsors" element={<Sponsoring />} />
=======
          <Route path="/about" element={<AboutUs />} />
>>>>>>> origin/AboutUs
        </Routes>
      </BrowserRouter>
      </Fade>
    </div>
  );
}

export default App;
