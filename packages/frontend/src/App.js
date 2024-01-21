import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import VendorPage from "./vendorPage";
import GuestPage from "./guestPage";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="vendor" element={<VendorPage />} />
      <Route path="guest" element={<GuestPage/>} />

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
  routes for.*/ }
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
    
  );
}
const NoMatch = ()=> <h1>This page does not exist</h1>
const Home = ()=> <div className="App">
<header className="navbar">
  <nav>
    <ul>
      <li><Link to="/vendor">VENDORS</Link></li>
      <li><Link to="/guest">GUESTLIST</Link></li>
    </ul>
  </nav>    
  </header>
<div className="content">
<h1 className="heading">WELCOME TO</h1>
<p className="paragraph">My Wedding Day</p>
<a href="/about.js" className="cta-button">LEARN MORE</a>      
</div>
</div>
export default App;

