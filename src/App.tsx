import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import CardSlider from './carousel/CardSlider';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardSlider />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
