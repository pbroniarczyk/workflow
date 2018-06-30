import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import List from "../list/List.jsx";

// Assets
import "./board.css";
import { updateCardList } from "../../actions/cardActions";


class Board extends Component {
	constructor(props) {
        super(props);

		this.dragCardStart = this.dragCardStart.bind(this);
		this.dragOver = this.dragOver.bind(this);
		this.dropCardHandler = this.dropCardHandler.bind(this);
		this.addCard = this.addCard.bind(this);
	}

	// DRAG AND DROP ================================================
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
			cardArray = this.props.cards,
			index = this.findCardInArray(draggedCard, this.props.cards);

		draggedCard.currentList = listNumber;
		cardArray.splice(index, 1, draggedCard);
		// this.setState({ cards: cardArray });
		this.props.updateCardList(cardArray)
		// return;
	}
	// ===============================================================

	addCard = (title, id, currentList) => {
		const newCard = { title, id, currentList };
		const cardArray = this.props.cards;
		cardArray.push(newCard);
		
		this.setState({ cards: cardArray });
	}

	render() {
		
		return (
			<div className="board">
				BOARD
        		<div className="board__column-wrapper">

					{ this.props.lists.map((list, i) => 
						<List
							key={i}
							title={list.title}
							listNumber={list.listNumber}
							// cards={this.props.cards}
							
							addCard={this.addCard}
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


Board.propTypes = {
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
            listNumber: PropTypes.number.isRequired
		})
	),
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			currentList: PropTypes.number.isRequired
		})
	),
	updateCardList: PropTypes.func
}

const mapStateToProps = state => ({
	lists: state.listReducer.lists,
	cards: state.cardReducer.cards
});

export default connect(mapStateToProps, { updateCardList })(Board);