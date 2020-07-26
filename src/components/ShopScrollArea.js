import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const StyledButton = styled(Button)``;

const StyledDiv = styled.div`
  flex: 1;
  background: teal;
  overflow-y: scroll;
  width: 100%;
`;

export function ShopScrollArea(props) {
  const btnVariant = "primary";
  const upgrades = Object.keys(props.upgrades);
  return (
    <StyledDiv>
      {upgrades.map((name, i) => (
        <StyledButton
          variant={btnVariant}
          block
          size="lg"
          key={i}
          name={name}
          onClick={props.onUpgrade}
        >
          {`Upgrade ${name}`}
        </StyledButton>
      ))}
    </StyledDiv>
  );
}

export default ShopScrollArea;
