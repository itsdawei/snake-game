import React, { Component } from "react";
import styled from "styled-components";

const SnakeDot = styled.div`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: #000;
  border: 1px solid #fff;
  z-index: 2;
`;

export default class Snake extends Component {
  render() {
    return (
      <div className="snake">
        {this.props.snakeDots.map((dot, i) => {
          const style = {
            left: `${dot[0]}%`,
            top: `${dot[1]}%`,
          }

          return <SnakeDot key={i} style={style}></SnakeDot>;
        })}
      </div>
    );
  }
}
