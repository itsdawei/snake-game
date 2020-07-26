import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const StyledButton = styled(Button)``;

const StyledDiv = styled.div`
  flex: 1;
  background: teal;
  overflow-y: scroll;
  width: 100%;
`;

export class ShopScrollArea extends Component {
  state = {
    upgrades: ["u0", "u1", "u2", "u3"],
  };

  render() {
    const btnVariant = "danger";
    return (
      <StyledDiv>
        {this.state.upgrades.map((name, i) => (
          <StyledButton
            variant={btnVariant}
            block
            size="lg"
            key={i}
            id={i}
            onClick={this.props.onUpgrade}
          >
            {`Upgrade ${name}`}
          </StyledButton>
        ))}
      </StyledDiv>
    );
  }
}

export default ShopScrollArea;
