import React, { Component } from "react";
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0
    }
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score+1,
    });
  }

  resetScore = () => {
    this.setState({
      score: 0,
    })
  }

  render() {
    return (
      <div className="background">
        <Button variant="primary">
          Food <Badge variant="light">{this.state.score}</Badge>
        </Button>
        <Board onScoreIncrement={this.incrementScore} onScoreReset={this.resetScore}/>
      </div>
    );
  }
}

export default App;
