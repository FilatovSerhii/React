import Board from './Board.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i) {
    const squares = this.getCurrentSquares();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: [... this.state.history, squares],
      stepNumber: this.state.stepNumber + 1,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  getCurrentSquares(){
    return [...this.state.history[this.state.stepNumber]];
  }

  getMoves(){
    return Array(this.state.history.length).fill(null).map((_, move) =>       
      <li key={move}>
        <button onClick={() => this.jumpTo(move)}>
          {move ? `Go to move #${move}` : 'Go to game start'}
        </button>
      </li>
    );
  }

  getStatus(winner){
    if (winner) {
      return 'Winner: ' + winner;
    } 
    return'Next player: ' + (this.state.xIsNext ? 'X' : 'O');    
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.getCurrentSquares()}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{this.getStatus(this.calculateWinner(this.getCurrentSquares()))}</div>
          <ol>{this.getMoves()}</ol>
        </div>
      </div>
    );
  }
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<Game />, rootElement);

export default Game;