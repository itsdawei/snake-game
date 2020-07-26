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
    upgradesList: this.props.upgrades.map((item) => item[0])
  }

  render() {
    const btnVariant = "primary";
    return (
      <StyledDiv>
      {this.state.upgradesList.map((name, i) => (
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
