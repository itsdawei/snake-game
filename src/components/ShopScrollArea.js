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
    
  }

  render() {
    const btnVariant = "primary";
    const upgrades = Object.keys(this.props.upgrades);
    return (
      <StyledDiv>
      {upgrades.map((name, i) => (
        <StyledButton
          variant={btnVariant}
          block
          size="lg"
          key={i}
          name={name}
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
