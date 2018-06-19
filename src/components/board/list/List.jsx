import React, { Component } from 'react';

// Components
import Card from "../card/Card.jsx";

// Assets
import "./list.css";


class List extends Component {
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
                    onClick={() => this.props.addCard("card title", "sdfbhnefbs", this.props.listNumber)} >
                    Add card
                </button>
            </div>
        )
    }
}

export default List;




// constructor(props) {
//     super(props);

//     this.state = {
//         cards: []
//     }
// }

// componentWillReceiveProps = (nextProps) => {
//     console.log("RECEIVE PROPS", nextProps)
//     const filteredCards = nextProps.cards.filter(card => card.currentList === this.props.listNumber);

//     this.setState({ cards: filteredCards }, console.log("filtered cards sets in state", this.state));
// }

// componentWillMount = () => {
//     const allCards = this.props.cards;
//     const filteredCards = allCards.filter(card => card.currentList === this.props.listNumber);

//     this.setState({ cards: filteredCards });
// }