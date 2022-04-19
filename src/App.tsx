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
import UnderConstruction from './pages/UnderConstruction';


function App() {
  return (
    <div className="App">
      <UnderConstruction />
    </div>
  );
}

export default App;
