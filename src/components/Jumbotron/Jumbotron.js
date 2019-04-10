import React from "react";
import logo from "../../logo.png";

function Jumbotron () {
    return (
        <div className="jumbotron img-fluid justify-content-center">
        <img id="logo" src={logo} class="rounded mx-auto d-block" alt="Logo" />
        </div>
       );
};

export default Jumbotron;