import React, { Component } from "react";
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.board1 = React.createRef();
  }

  render() {
    const currentBoard = this.board1.current || 0;
    return (
      <>
        <header>Snake Game</header>
        
        <Board ref={this.board1} />
      </>
    );
  }
}

export default App;
