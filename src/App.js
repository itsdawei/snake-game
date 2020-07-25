import React, { Component } from "react";
import Board from "./Board";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { Row, Col } from "react-bootstrap";

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
      <Container fluid className="background">
        <Row style={{height: "100vh"}}>
          <Col className="shop-area">
            <div className="total-food-overlay" />
            <div className="total-food">
              Food: <Badge variant="dark">{this.state.score}</Badge>
            </div>
            <div className="vl" style={{ right: "0", zIndex: "10" }} />
          </Col>
          <Col xs={6} className="game-area">
            <Board
              onScoreIncrement={this.incrementScore}
              onScoreReset={this.resetScore}
            />
          </Col>
          <Col className="third-area">
            <div
              className="vl"
              style={{ left: "0", zIndex: "10", marginLeft: "-2px" }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
