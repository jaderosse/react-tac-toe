import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xTurn: true
		}
	}

	handleClick = (i) => {
		const cells = this.state.squares.slice();
		cells[i] = this.state.xTurn ? 'X' : 'O';
		this.setState({squares: cells, xTurn: !this.state.xTurn});
	}

	renderSquare(i){
		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
	}

	checkWin = (squares) => {
		const lines = [
			[0, 1, 2],
	    [3, 4, 5],
	    [6, 7, 8],
	    [0, 3, 6],
	    [1, 4, 7],
	    [2, 5, 8],
	    [0, 4, 8],
	    [2, 4, 6]
		]
		for(var i = 0; i < lines.length; i++){
			var [a, b, c] = lines[i];
			if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
				return squares[a];
			}
		}
		return null;
	}

	render(){
		const winner = this.checkWin(this.state.squares);
		let turn;
		if(winner){
			turn = 'We have a winner! ' + winner;
		} else {
			turn = 'Next turn is ' + (this.state.xTurn ? 'X' : 'O');
		}
		return(
			<div className="board">
				<h3>{turn}</h3>
				<div className="row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		)
	}
}

export default Board;