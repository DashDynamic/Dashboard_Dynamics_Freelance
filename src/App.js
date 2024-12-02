import "./style.scss";
import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Charge from "./components/Charge";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Products from "./pages/Products";
import UseCase from "./pages/Use_case";
import Contacts from "./pages/Contacts";
import NewsRoom from "./pages/News_room";
import Fleets from "./pages/Fleets";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component
import Blogs from "./pages/Blogs";
import EV_users from "./pages/EV_users";
import EV_Manufacturer from "./pages/EV_Manufacturer";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Market from "./pages/Market";
import { isMobile } from "react-device-detect";
import BoardMembers from "./pages/Board_members";
import Journey from "./pages/Journey";
import { Analytics } from "@vercel/analytics/react";
import { initGA, logPageView } from "./utils/analytics";
import { useLocation } from "react-router-dom";

function Preloader() {
  return (
    <div id="preloader">
      <img src="../load2.gif" />
      {/* <iframe
        src="https://giphy.com/embed/9U100arhSkONMI6zo0"
        width="480"
        height="360"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe> */}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Replace 'G-XXXXXXXXXX' with your Google Analytics tracking ID
    initGA("G-BL66T1YCXQ");
  }, []);

  useEffect(() => {
    // Log page view on route change
    logPageView();
  }, [location]);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout value as needed

    // Clear timeout when component unmounts
    return () => clearTimeout(timeout);
  }, []);

  // if (isMobile) {
  //   window.location.replace('https://md.dashdynamic.in/');
  // }

  return (
    <div className="App">
      {isLoading ? <Preloader /> : <MainContent />} <Analytics />
    </div>
  );
}

function MainContent() {
  return (
    <BrowserRouter className="App">
      <Nav />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Routes>
        {/* PENDING SPEEDOMETER */}
        <Route path="/" element={<Home />} />
        {/* PENDING PAGE */}
        <Route path="/Technology" element={<Technology />} />
        {/* DONE */}
        <Route path="/Products" element={<Products />} />
        {/* DONE */}
        <Route path="/Use_case" element={<UseCase />} />
        {/* DONE */}
        <Route path="/Contacts" element={<Contacts />} />
        {/* PENDING */}
        <Route path="/News_room" element={<NewsRoom />} />
        {/* DONE */}
        <Route path="/Careers" element={<Careers />} />
        {/* TO BE FIXED */}
        <Route path="/Charge" element={<Charge />} />
        {/* TO BE FIX */}
        <Route exact path="/Fleets" element={<Fleets />} />
        {/* DONE */}
        <Route path="/Blogs" element={<Blogs />} />
        {/* DONE */}
        <Route path="/Ev_users" element={<EV_users />} />
        {/* PENDING */}
        <Route path="/about" element={<About />} />
        {/* GRADIENT PENDING */}
        <Route exact path="/ev_manufacturer" element={<EV_Manufacturer />} />
        {/* DONE */}
        <Route exact path="/team" element={<Team />} />
        {/* SCOOTY PENDING */}
        <Route exact path="/market" element={<Market />} />

        <Route path="/board_members" element={<BoardMembers />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
