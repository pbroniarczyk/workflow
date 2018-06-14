import React, { Component } from 'react';

// Components
import Card from "../card/Card.jsx";

// Assets
import "./list.css";


class List extends Component {
    render() {
        const allCards = this.props.cards;
        const filteredCards = allCards.filter(card => card.currentList === this.props.listNumber)

        return (
            <div
                className="list"
                id={this.props.listNumber}
                onDragOver={e => this.props.dragOver(e)}
                onDrop={e => this.props.dropCardHandler(e)}>
                
                {this.props.title}
                
                {
                    filteredCards.map((card, i) =>
                        <Card
                            card={card}
                            key={card.id}
                            dragCardStart={this.props.dragCardStart}/>
                    )
                }
                
            </div>
        )
    }
}

export default List;