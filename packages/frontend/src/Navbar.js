import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import VendorPage from "./vendorPage";
import GuestPage from "./guestPage";

function Navbar() {
  return (
    <>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="vendor" element={<VendorPage/>} />
      <Route path="guest" element={<GuestPage/>} />
     </Routes>
<div>
<header className="navbar">
  <nav>
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/vendor">VENDORS</Link></li>
      <li><Link to="/guest">GUESTLIST</Link></li>
    </ul>
  </nav>    
  </header>

</div>
</>
);
  }
export default Navbar;
