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
import AboutUs from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tunisia" element={<AboutTn />} />
          <Route path="/applyforfunding" element={<ApplyForFunding />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
