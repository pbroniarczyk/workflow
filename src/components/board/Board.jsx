import React, { Component } from 'react'

// Components
import Column from "./column/Column.jsx";

// Assets
import "./board.css";


class Board extends Component {
  render() {
    return (
      <div className="board">
        BOARD
        <div className="board__column-wrapper">
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
      </div>
    )
  }
}

export default Board;