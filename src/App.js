import React from "react";
import Activities from "./Components/Activities";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Booking from "./Components/Booking";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
    < Topbar  />
    <Navbar />
    <Hero />
    <Activities />
    <Booking />
    <Gallery />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
