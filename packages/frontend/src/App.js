import React from "react";
import "./App.css";
import Navbar from "./Navbar";

const NoMatch = () => <h1>This page does not exist</h1>;

const Home = () => (
  <div className="App">
    <Navbar />
    <div className="content">
      <h1 className="heading">WELCOME TO</h1>
      <p className="paragraph">My Wedding Day</p>
      <a href="/vendorPage.js" className="cta-button">LEARN MORE</a>
    </div>
  </div>
);
export default App;

