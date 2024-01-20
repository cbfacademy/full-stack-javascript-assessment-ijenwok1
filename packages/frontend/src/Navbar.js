import React from "react";
import {Link } from "react-router-dom";

function Navbar() {
  return (
<header className="navbar">
  <nav>
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/vendor">VENDORS</Link></li>
      <li><Link to="/guest">GUESTLIST</Link></li>
    </ul>
  </nav>    
  </header>
);
}

export default Navbar;
