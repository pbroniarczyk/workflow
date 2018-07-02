import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Card from "../../components/card/Card.jsx";
import AddCard from "../../components/addCard/AddCard.jsx";

// Assets
import "./list.css";
import { toggleNewCardForm } from "../../actions/listActions";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // addingCard: false,
            newCardTitle: "" 
        }

        this.toggleAddingCardForm = this.toggleAddingCardForm.bind(this);
        this.setNewCardTitle = this.setNewCardTitle.bind(this);
    }

    toggleAddingCardForm = (currentList) => {
        let list = [...this.props.lists];
        let updatedListElement = list[currentList - 1];
        updatedListElement.addCardVisible = !this.props.lists[currentList - 1].addCardVisible;
        const index = list.findIndex((element, index) => index === currentList - 1);
        list.splice(index, 1, updatedListElement);
        this.props.toggleNewCardForm(list)
    }

    setNewCardTitle = event => {
        this.setState({ newCardTitle: event.target.value })
    }
    
    render() {
        const allCards = this.props.cards;
        const filteredCards = allCards.filter(card => card.currentList === this.props.listNumber);

        console.log("LIST === ", this.props);
        return (
            <div
                className="list"
                id={this.props.listNumber}
                onDragOver={e => this.props.dragOver(e)}
                onDrop={e => this.props.dropCardHandler(e, this.props.listNumber)} >
                
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
                    onClick={() => {this.toggleAddingCardForm(this.props.listNumber)}} >
                    Add card
                </button>
                { this.props.lists[this.props.listNumber - 1].addCardVisible 
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
    toggleNewCardForm: PropTypes.func
}

const mapStateToProps = (state) => ({
    cards: state.cardReducer.cards,
    lists: state.listReducer.lists
})

export default connect(mapStateToProps, { toggleNewCardForm })(List);