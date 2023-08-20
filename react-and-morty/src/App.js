import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import css from "./App.css";
import logo from "./logo.png";
//import { useCharacters, useLocations } from "./api/useData";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Pages/Characters";
import Location from "./Pages/Location";
import Episodes from "./Pages/Episodes";
import CardDetails from "./components/Cards/CardDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
        
      </Routes>
    </Router>
  );
}
const Home = ()=>{
  return (
    <div className="home" >
      <div className="content">
        <p>React and Morty</p>
        <p>A website for your preferences.</p>
      </div>
    </div>
  );

}

export default App;
