import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

export class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="total-food-overlay" />
        <div className="total-food">
          Food: <Badge variant="dark">{this.props.score}</Badge>
        </div>
      </React.Fragment>
    );
  }
}

export default Shop;
