import React, { Component } from 'react'

// Components
import List from "./list/List.jsx";

// Assets
import "./board.css";


class Board extends Component {
	constructor(props) {
        super(props);
		this.state = {
			lists: [
				{
					title: "List - 1",
					listNumber: 1
				},
				{
					title: "List - 2",
					listNumber: 2
				},
				{
					title: "List - 3",
					listNumber: 3
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

		this.dragCardStart = this.dragCardStart.bind(this);
		this.dragOver = this.dragOver.bind(this);
        this.dropCardHandler = this.dropCardHandler.bind(this);
	}

	findCardInArray = (card, cardArray) => 
		cardArray.findIndex(cardInArray => 
			cardInArray.id === card.id);
	
	dragCardStart = (event, card) => {
        const sourceCard = event.currentTarget;
        sourceCard.style.border = "dashed";
		event.dataTransfer.setData("card", JSON.stringify(card));
	}
	
	dragOver = event => event.preventDefault(); 

	dropCardHandler = (event, listNumber) => {
		const data = event.dataTransfer.getData("card"),
			draggedCard = JSON.parse(data),
			cardArray = this.state.cards,
			index = this.findCardInArray(draggedCard, this.state.cards);

		draggedCard.currentList = listNumber;
		cardArray.splice(index, 1, draggedCard);
		this.setState({ cards: cardArray });
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
							cards={this.state.cards}
							
							dragCardStart={this.dragCardStart}
							dragOver={this.dragOver}
							dropCardHandler={this.dropCardHandler}/>
						)
					}

				</div>
			</div>
		)
	}
}

export default Board;