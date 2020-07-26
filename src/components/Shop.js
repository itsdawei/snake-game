import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import styled from "styled-components";
import ShopScrollArea from "./ShopScrollArea";

const FoodCount = styled.div`
  position: relative;
  width: auto;
  height: auto;
  text-align: center;
  z-index: 1;
`;

const FoodOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  background-color: white;
  opacity: 0.5;
  z-index: 0;
`;

export class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <div className="food-display-bar">
          <FoodOverlay />
          <FoodCount>
            Food: <Badge variant="dark">{this.props.score}</Badge>
          </FoodCount>
        </div>
        <ShopScrollArea
          className="shop"
          onUpgrade={this.props.upgradeHandler}
        />
      </div>
    );
  }
}

export default Shop;
