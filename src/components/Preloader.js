import React from "react";
import './Preloader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <h1 className="letter text-white animate">G</h1>
        <h1 className="letter text-white animate">r</h1>
        <h1 className="letter text-white animate">a</h1>
        <h1 className="letter text-white animate">f</h1>
        <h1 className="letter text-white animate">f</h1>
        <h1 style={{color: "#f39c12"}} className="letter animate">i</h1>
        <h1 className="letter text-white animate">x</h1>
      </div>
    </div>
  );
}

export default Loader;
