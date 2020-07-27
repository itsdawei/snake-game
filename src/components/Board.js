import React, { Component } from "react";
import Snake from "./Snake";
import Food from "./Food";
import styled from "styled-components";

const GameBoard = styled.div`
  position: relative;
  margin: 50px auto;
  width: 500px;
  height: 500px;
  border: 2px solid black;
  background-color: bisque;
`;

const getRandomCoords = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  foods: [getRandomCoords()],
  speed: 200,
  direction: "RIGHT",
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0],
  ],
};

class Board extends Component {
  state = {
    ...initialState,
    randomRate: 500,
  };

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    setInterval(this.onRandomEvent, this.state.randomRate);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBounds();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 87:
      case 38:
        if (this.state.direction !== "DOWN") {
          this.setState({ direction: "UP" });
        }
        break;
      case 83:
      case 40:
        if (this.state.direction !== "UP") {
          this.setState({ direction: "DOWN" });
        }
        break;
      case 68:
      case 39:
        if (this.state.direction !== "LEFT") {
          this.setState({ direction: "RIGHT" });
        }
        break;
      case 65:
      case 37:
        if (this.state.direction !== "RIGHT") {
          this.setState({ direction: "LEFT" });
        }
        break;
      default:
        break;
    }
  };

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      default:
        break;
    }

    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    });
  };

  checkIfOutOfBounds() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    });
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let foodList = this.state.foods;

    let index = -1;
    for (let i = 0; i < foodList.length; i++) {
      const element = foodList[i];
      if (element[0] === head[0] && element[1] === head[1]) {
        index = i;
      }
    }

    if (index > -1) {
      foodList.splice(index, 1);

      // essential
      this.props.onScoreIncrement();
      this.growSnake();
      this.increaseSpeed();
    }
  }

  getRandomCoords_Safe() {
    let isValid = true;
    while (isValid) {
      let coords = getRandomCoords();
      let snake = [...this.state.snakeDots];
      snake.forEach((dot) => {
        if (coords[0] === dot[0] && coords[1] === dot[1]) {
          isValid = false;
        }
      });

      if (isValid) {
        return coords;
      }
    }
  }

  growSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
      });
    }
  }

  resetGameState() {
    this.setState(initialState);
  }

  onGameOver = () => {
    this.resetGameState();
  };

  onRandomEvent = () => {
    let rand = Math.random();
    if (rand < 0.1) {
      this.onFoodGen();
    }
  };

  onFoodGen = () => {
    var foodArray = [...this.state.foods];
    if (foodArray.length < this.props.upgrades["Max Food"]) {
      foodArray.push(this.getRandomCoords_Safe());
    }
    this.setState({
      foods: foodArray,
    });
  };

  render() {
    return (
      <GameBoard className="board">
        <Snake snakeDots={this.state.snakeDots} />
        <Food dots={this.state.foods} />
      </GameBoard>
    );
  }
}

export default Board;
