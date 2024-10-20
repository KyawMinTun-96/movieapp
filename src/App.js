import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore'
import Detail from './pages/Detail/Detail'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import './App.css'



function App() {
  return (
    <>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:explore" element={<Explore />} />
          <Route path="/:explore/:id" element={<Detail />} />

          <Route path="/search" element={<Detail />} />
        </Routes>

      </div>
      
      <Footer />
      <MobileNavigation/>
    </>
  );
}

export default App;
