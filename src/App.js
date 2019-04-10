import React, { Component } from "react";

import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import cards from "./cards.json";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isGuessCorrect: true,
      cards: cards,
      score: 0,
      maxScore: 24,
      topScore: 0,
      message: "CLICK A DISC GOLFER TO BEGIN"
    };
  }

  //Functions for game logic
  //Main click handler function
  handleSaveClick = id => {
    // Variable to hold the cards state.
    const cardz = this.state.cards;
    // Search through character cards to find the one that matches the clicked id.
    const cardClicked = cardz.filter(card => card.id === id);

    // If the card isn't clicked...
    if (!cardClicked[0].clicked) {
      // ...set it to now be clicked
      cardClicked[0].clicked = true;
      // ...call this function to register the correct guess
      this.handleCorrectClick();

      // ... randomize character cards
      this.randomizeCharacters(cardz);

      this.setState({ cardz });
    } else {
      this.handleIncorrectClick();
    }
  };

  //Function to randomize the characters
  randomizeCharacters = characters => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  //Handler for correct guesses/clicks
  handleCorrectClick = () => {
    this.setState({ isGuessCorrect: true });
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "CONGRATS! YOU WIN!",
        messageClass: "correct"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "YOU GUESSED CORRECTLY!",
        messageClass: "correct"
      });
    }
  };

  //Handler for incorrect guesses/clicks
  handleIncorrectClick = () => {
    this.setState({
      message: "INCORRECT. CLICK TO PLAY AGAIN!",
      isGuessCorrect: false
    });
    // this.toggleIncorrectAnimation();
    this.resetGame();
  };

  //Resets the game
  resetGame = id => {
    const cardz = this.state.cards;
    for (let i = 0; i < cardz.length; i++) {
      cardz[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  //Render the App component on the page
  render() {
    const { message, score, cards, topScore } = this.state;
    return (
      <div className="container-fluid mainContainer">
      <Jumbotron />
    

      <div className="fluid-container lodge h-100vh">
        <Navbar
          className="row"
          score={score}
          topScore={topScore}
          message={message}
        />

        <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
          {cards.map(({ id, name, image, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
              clickHandler={this.handleSaveClick}
            />
          ))}
        </div>

        {/* <Footer className="footer-mgn row" /> */}
      </div>
      </div>
    );
  }
}

export default App;