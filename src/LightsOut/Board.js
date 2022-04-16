import React, { cloneElement, Component } from "react";
import "./Board.css";
import Cell from "./Cell";

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nCols: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);

    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }

  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nRows; y++) {
      let row = [];
      for (let x = 0; x < this.props.nCols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }

    return board;
  }

  flipCellsAround(coord) {
    let { nCols, nRows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y + 1, x); // flip north
    flipCell(y, x + 1); // flip east
    flipCell(y - 1, x); // flip south
    flipCell(y, x - 1); // flip west

    // set hasWon to true if every cel is turned off
    let hasWon = board.every((row) => row.every((cell) => !cell));

    this.setState({ board, hasWon });
  }

  render() {
    if (this.state.hasWon) {
      return <h1>You Win!!!</h1>;
    }

    let tblBoard = [];
    for (let y = 0; y < this.props.nRows; y++) {
      let row = [];
      for (let x = 0; x < this.props.nCols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }

    return (
      <div className="Board-wrapper">
        {this.state.hasWon ? (
          <div className="winner">
            <span className="neon-orange">You</span>
            <span className="neon-blue">Win!</span>
          </div>
        ) : (
          <div>
            <div className="Board-title">
              <span className="neon-orange">Lights</span>
              <span className="neon-blue">Out</span>
            </div>
            <table className="Board">
              <tbody>{tblBoard}</tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Board;
