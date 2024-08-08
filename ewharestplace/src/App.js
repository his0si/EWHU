import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Home from "./components/Home";
import './App.css';
import EngineerBuilding from "./components/EngineerBuilding";
import PoscoBuilding from "./components/PoscoBuilding";
import SciBuilding from "./components/SciBuilding";
import SktelecomBuilding from "./components/SktelecomBuilding";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/engineering" element={<EngineerBuilding />}></Route>
      <Route path="/posco" element={<PoscoBuilding />}></Route>
      <Route path="/science" element={<SciBuilding />}></Route>
      <Route path="/sktelecom" element={<SktelecomBuilding />}></Route>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
