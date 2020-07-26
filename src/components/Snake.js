import React from "react";
import styled from "styled-components";

const SnakeDot = styled.div`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: #000;
  border: 1px solid #fff;
  z-index: 2;
`;

export default function Snake(props) {
  return (
    <div className="snake">
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };

        return <SnakeDot key={i} style={style}></SnakeDot>;
      })}
    </div>
  );
}
