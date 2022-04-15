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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aboutTn" element={<AboutTn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
