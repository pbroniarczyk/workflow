import React, { Component } from 'react'

// Components
import List from "./list/List.jsx";

// Assets
import "./board.css";


class Board extends Component {
	state = {
		lists: [
			{
				title: "List - 1",
				listNumber: 1
			},
			{
				title: "List - 2",
				listNumber: 2
			},
		],

		cards: [
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
						<List
							key={i}
							title={list.title}
							listNumber={list.listNumber}
							cards={this.state.cards}/>
						)
					}

				</div>
			</div>
		)
	}
}

export default Board;