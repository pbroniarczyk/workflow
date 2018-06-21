import React, { Component } from 'react';
import PropTypes from "prop-types";

// Components
import Card from "../card/Card.jsx";
import AddCard from "./AddCard.jsx";

// Assets
import "./list.css";


class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addingCard: false,
            newCardTitle: "" 
        }

        this.toggleAddingCardForm = this.toggleAddingCardForm.bind(this);
        this.setNewCardTitle = this.setNewCardTitle.bind(this);
    }

    toggleAddingCardForm = () => {
        this.setState({ addingCard: !this.state.addingCard});
    }

    setNewCardTitle = event => {
        this.setState({ newCardTitle: event.target.value })
    }

    render() {
        const allCards = this.props.cards;
        const filteredCards = allCards.filter(card => card.currentList === this.props.listNumber);

        return (
            <div
                className="list"
                id={this.props.listNumber}
                onDragOver={e => this.props.dragOver(e)}
                onDrop={e => this.props.dropCardHandler(e, this.props.listNumber)}
                onDragEnd={e => this.props.dropCardHandler(e)}>
                
                {this.props.title}
                
                <div className="list__wrapper">
                    {filteredCards.map((card, i) =>
                        <Card
                            card={card}
                            key={card.id}
                            dragCardStart={this.props.dragCardStart}/>
                    )}
                </div>
                
                <button
                    className="list__btn" 
                    onClick={this.toggleAddingCardForm} >
                    Add card
                </button>
                { this.state.addingCard 
                    ? <AddCard
                        newCardTitle={this.state.newCardTitle}
                        addCard={this.props.addCard}
                        listNumber={this.props.listNumber}
                        toggleAddingCardForm={this.toggleAddingCardForm}
                        setNewCardTitle={this.setNewCardTitle} /> 
                    : null }
            </div>
        )
    }
}


List.propTypes = {
    dragCardStart: PropTypes.func.isRequired,
    cards: PropTypes.array,
    dragOver: PropTypes.func.isRequired,
    dropCardHandler: PropTypes.func.isRequired,

    setNewCardTitle: PropTypes.func,
    newCardTitle: PropTypes.string,
    addCard: PropTypes.func.isRequired,
    listNumber: PropTypes.number.isRequired,
    toggleAddingCardForm: PropTypes.func
}

export default List;