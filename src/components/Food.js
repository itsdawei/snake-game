import React from "react";
import styled from "styled-components";

const SnakeFood = styled.div`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: red;
  border: 1px solid #fff;
  z-index: 1;
`;

export function Food(props) {
    return (
      <div className="foods">
      {props.dots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <SnakeFood className= "food" key={i} style={style}></SnakeFood>;
      })}
    </div>
    )
}

export default Food;
