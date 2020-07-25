import React, { Component } from "react";
import styled from "styled-components";

const SnakeFood = styled.div.attrs((props) => ({
  dot: props.dot,
}))`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: red;
  border: 1px solid #fff;
  z-index: 1;
  left: ${(props) => props.dot[0]}%;
  top: ${(props) => props.dot[1]}%;
`;

export default class Food extends Component {
  render() {
    return <SnakeFood className="food" dot={this.props.dot}></SnakeFood>;
  }
}
