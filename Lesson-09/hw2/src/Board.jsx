import React from 'react';
import Square from './Square.jsx';

class Board extends React.Component {
  renderSquare(i){
    console.log(i)

    return <Square 
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)} 
          />
  }

  renderBoard(){
    const board = [[0,1,2], [3,4,5], [6,7,8]];

    return board.map(row => 
      <div className="board-row">
        {row.map(square => this.renderSquare(square))}
      </div>
    );
  }


  render() {
    return <div>{this.renderBoard()}</div>;

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
};

export default Board;
