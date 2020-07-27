import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Badge from "react-bootstrap/Badge";

const StyledButton = styled(Button)`
`;

const StyledDiv = styled.div`
  flex: 1;
  background: teal;
  overflow-y: scroll;
  width: 100%;
`;

const btnVariant = "primary";
const badgeVariant = "dark";

export function ShopScrollArea(props) {
  const upgrades = Object.entries(props.upgrades);  
  return (
    <StyledDiv>
      {upgrades.map((upgrade, i) => (
        <StyledButton
          variant={btnVariant}
          block
          size="lg"
          key={i}
          name={upgrade[0]}
          onClick={props.onUpgrade}
        >
          {`Upgrade ${upgrade[0]}  `}
          <Badge variant={badgeVariant}>{upgrade[1]}</Badge>
        </StyledButton>
      ))}
    </StyledDiv>
  );
}

export default ShopScrollArea;
