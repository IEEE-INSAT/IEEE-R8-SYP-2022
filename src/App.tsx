import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import AboutTn from './pages/AboutTn';
import ApplyForFunding from './pages/ApplyForFunding';
import Sponsoring from './pages/Sponsoring';
import AboutUs from './pages/About';
import Registration from './pages/Registration';

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
          <Route path="/sponsors" element={<Sponsoring />} />
          <Route path="/about" element={<AboutUs />} />
            <Route path="/registration" element={<Registration />} />
          <Route path='*' element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
      </Fade>
    </div>
  );
}

export default App;
