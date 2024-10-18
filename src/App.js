import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore'
import Detail from './pages/Detail/Detail'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import Banner from "./components/Banner/Banner";


function App() {
  return (
    <>
      <div className="app">

        <Navbar />
        <Banner />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:id" element={<Explore />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/search" element={<Detail />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <MobileNavigation/>
    </>
  );
}

export default App;
