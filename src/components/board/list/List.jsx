import React, { Component } from 'react';

// Components
import Card from "../card/Card.jsx";

// Assets
import "./list.css";


class List extends Component {
    constructor(props) {
        super(props);

        this.dropCardHandler = this.dropCardHandler.bind(this);
    }

    dropCardHandler = e => {
        console.log("DROP TARGET", dropData);
        e.preventDefault();
        const dropData = e.dataTransfer.getData("text");
    }

    componentDidMount = () => {
        console.dir(document.querySelector(".list"))
    }

    render() {
        const allCards = this.props.cards;
        const filteredCards = allCards.filter(card => card.currentList === this.props.listNumber)

        return (
            <div
                className="list"
                id={this.props.listNumber}
                onDragOver={this.dropCardHandler}>
                
                {this.props.title}
                
                {
                    filteredCards.map((card, i) =>
                        <Card
                            title={card.title} 
                            id={card.id}
                            key={card.id}/>
                    )
                }
                
            </div>
        )
    }
}

export default List;