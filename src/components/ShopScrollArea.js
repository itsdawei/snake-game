import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  
`;

const Container = styled.div`
  flex: 1;
  background: teal;
  overflow-y: scroll;
  width: 100%;
`;

export class ShopScrollArea extends Component {
  render() {
    const btnVariant = "danger";
    return (
      <Container>
        <StyledButton variant={btnVariant} block size="lg">
          upgrade 1
        </StyledButton>
        <StyledButton variant={btnVariant} block size="lg">
          upgrade 2
        </StyledButton>
        <StyledButton variant={btnVariant} block size="lg">
          upgrade 3
        </StyledButton>
        <StyledButton variant={btnVariant} block size="lg">
          upgrade 4
        </StyledButton>
      </Container>
    );
  }
}

export default ShopScrollArea;
