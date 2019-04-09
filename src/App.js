import "./App.css";

import React, { Component } from "react";

// import Card from "./components/Card";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import cards from "./cards.json";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Testing <code>src/App.js</code> and save to reload.
          </p>
          <Navbar
          className="row"
          // score={score}
          // topScore={topScore}
          // message={message}
        />
        </header>
      </div>
    );
  }
}

export default App;
