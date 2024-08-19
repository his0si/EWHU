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
import AppInternational from "./AppInternational";
import AppEducation from "./AppEducation";
import AppHakmun from "./AppHakmun";
import AppNewworld from "./AppNewworld";
import AppYeonhyeop from "./AppYeonhyeop";
import AppGym from "./AppGym";
import AppEcc from "./AppEcc";
import AppHelen from "./AppHelen";
import AppHumanEcologyBuilding from "./AppHumanEcologyBuilding";

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

      <Route path="/edu" element={<AppEducation />}></Route>
      <Route path="/hakmun" element={<AppHakmun />}></Route>
      <Route path="/international" element={<AppInternational />}></Route>
      <Route path="/newworld" element={<AppNewworld />}></Route>
      <Route path="/yeonhyeop" element={<AppYeonhyeop />}></Route>

      <Route path="/gym" element={<AppGym />}></Route>
      <Route path="/helen" element={<AppHelen />}></Route>
      <Route path="/ecc" element={<AppEcc />}></Route>
      <Route path="/human-ecology-building" element={<AppHumanEcologyBuilding />}></Route>


    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
