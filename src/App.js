import React, { Component } from "react";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Shop from "./components/Shop";

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
      <React.Fragment>
        <Container fluid style={{ backgroundColor: "teal"}}>
          <Row style={{ height: "100vh" }}>
            <Col className="shop-area">
              <Shop score={this.state.score} />
              <div
                className="vl"
                style={{ right: "0", zIndex: "10", marginRight: "-2px" }}
              />
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
      </React.Fragment>
    );
  }
}

export default App;
