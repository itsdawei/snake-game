import React, { Component } from "react";
import Board from "./Board";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  resetScore = () => {
    this.setState({
      score: 0,
    });
  };

  render() {
    return (
      <div className="background">
        <div className="shop-area">
          <div className="total-food-overlay" />
          <div className="total-food">
            Food: <Badge variant="dark">{this.state.score}</Badge>
          </div>
          <div className="vl" style={{ right: "0", zIndex: "10" }} />
        </div>
        <div className="game-area">
          <Board
            onScoreIncrement={this.incrementScore}
            onScoreReset={this.resetScore}
          />
        </div>
        <div className="third-area">
          <div className="vl" style={{ left: "0", zIndex: "10", marginLeft: "-2px" }} />
        </div>
      </div>
    );
  }
}

export default App;
