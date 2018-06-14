import React, { Component } from 'react'

// Components
import Column from "./column/Column.jsx";
import Card from "./card/Card.jsx";

// Assets
import "./board.css";


class Board extends Component {
	state = {
		lists: [
			{
				title: "Column - 1",
				listNumber: 1
			},
			{
				title: "Column - 2",
				listNumber: 2
			},
		],

		tasks: [
			{
				title: "Card 1",
				id: "123fr23g",
				currentList: 1
			},
			{
				title: "Card 2",
				id: "qwdfq21d",
				currentList: 1
			},
			{
				title: "Card 3",
				id: "sdg34vdc",
				currentList: 1
			}
		]
	}

	render() {
		return (
			<div className="board">
				BOARD
        		<div className="board__column-wrapper">

					{ this.state.lists.map((list, i) => 
						<Column
							key={i}
							title={list.title}
							columnNumber={list.listNumber}
							tasks={this.state.tasks}/>
						)
					}

				</div>
			</div>
		)
	}
}

export default Board;