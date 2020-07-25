import React, { Component } from "react";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Shop from "./components/Shop";
import styled from "styled-components";

const VerticalLine = styled.div`
  border-left: 6px solid black;
  height: 100%;
  position: absolute;
  top: 0;
`;

const StyledCol = styled(Col)`
  margin: 0;
  padding: 0;
`;

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
        <Container fluid style={{ backgroundColor: "teal" }}>
          <Row style={{ height: "100vh" }}>
            <StyledCol className="shop-area">
              <Shop score={this.state.score} />
              <VerticalLine
                style={{ right: "0", zIndex: "10", marginRight: "-2px" }}
              />
            </StyledCol>
            <StyledCol xs={6} className="game-area no-padding">
              <Board
                onScoreIncrement={this.incrementScore}
                onScoreReset={this.resetScore}
              />
            </StyledCol>
            <StyledCol className="third-area" id="no-padding">
              <VerticalLine
                style={{ left: "0", zIndex: "10", marginLeft: "-2px" }}
              />
            </StyledCol>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
