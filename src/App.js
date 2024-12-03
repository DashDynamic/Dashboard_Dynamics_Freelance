import "./style.scss";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { initGA, logPageView } from "./utils/analytics";

// Components
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Charge from "./components/Charge";
import ScrollToTop from "./ScrollToTop";

// Pages
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Products from "./pages/Products";
import UseCase from "./pages/Use_case";
import Contacts from "./pages/Contacts";
import NewsRoom from "./pages/News_room";
import Fleets from "./pages/Fleets";
import Blogs from "./pages/Blogs";
import EV_users from "./pages/EV_users";
import EV_Manufacturer from "./pages/EV_Manufacturer";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Market from "./pages/Market";
import BoardMembers from "./pages/Board_members";
import Journey from "./pages/Journey";

// Preloader Component
function Preloader() {
  return (
    <div id="preloader">
      <img src="../load2.gif" alt="Loading..." />
    </div>
  );
}

// Analytics Wrapper Component
function AnalyticsWrapper() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
}

// Main Content Component
function MainContent() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <AnalyticsWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Use_case" element={<UseCase />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/News_room" element={<NewsRoom />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Charge" element={<Charge />} />
        <Route path="/Fleets" element={<Fleets />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Ev_users" element={<EV_users />} />
        <Route path="/about" element={<About />} />
        <Route path="/ev_manufacturer" element={<EV_Manufacturer />} />
        <Route path="/team" element={<Team />} />
        <Route path="/market" element={<Market />} />
        <Route path="/board_members" element={<BoardMembers />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
      <Footer />
    </>
  );
}

// App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initGA("G-BL66T1YCXQ");
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {isLoading ? <Preloader /> : <MainContent />}
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
