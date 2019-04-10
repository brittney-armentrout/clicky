import React from "react";

function Navbar({ message, score, topScore }) {
  return (

    
    // <header>
   
    // </header>
    <nav className="bg-nav fixed-top navbar">
    <div>HI I WANT TO BE MY LOGO!</div>
    {/* <img src="../../../logo.png"></img> */}

    <div class="navbar-fixed">
    <nav>
        <div class="nav-wrapper">
        <h1>Click an image to begin, BUT DO NOT CLICK THE SAME IMAGE TWICE!</h1>
        </div>
    </nav>
    </div>
      <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
        <li
          id="animate-this"
          className="col list-inline-item my-auto nav-calc-font m-0 p-0 text-center"
        >
          {message} <br/>
          BUT NOT THE SAME ONE TWICE!
        </li>
        <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
         TRY TO CLICK ALL 15 <br/>
          IMAGES TO WIN!
        </li>
        <li className="col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-center">
          SCORE: {score} | HIGH SCORE: {topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

