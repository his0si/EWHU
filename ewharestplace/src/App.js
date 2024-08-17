import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Home from "./components/Home";
import './App.css';
import EngineerBuilding from "./components/EngineerBuilding";
import PoscoBuilding from "./components/PoscoBuilding";
import SciBuilding from "./components/SciBuilding";
import SktelecomBuilding from "./components/SktelecomBuilding";
import HakGwanBuilding from "./components/HakGwanBuilding";
import MusicBuilding from "./components/MusicBuilding";
import JoyedaeBuilding from "./components/JoyedaeBuilding";
import PharmBuilding from "./components/PharmBuilding";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/engineering" element={<EngineerBuilding />}></Route>
      <Route path="/posco" element={<PoscoBuilding />}></Route>
      <Route path="/science" element={<SciBuilding />}></Route>
      <Route path="/sktelecom" element={<SktelecomBuilding />}></Route>
      <Route path="/hakgwan" element={<HakGwanBuilding />}></Route>
      <Route path="/music" element={<MusicBuilding />}></Route>
      <Route path="/joyedae" element={<JoyedaeBuilding />}></Route>
      <Route path="/pharm" element={<PharmBuilding />}></Route>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
