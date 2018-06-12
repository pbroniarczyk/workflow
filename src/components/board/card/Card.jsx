import React, { Component } from 'react'

// Assets
import "./card.css";


class Card extends Component {
    constructor(props) {
        super(props);

        this.dragCardStart = this.dragCardStart.bind(this);
    }

    dragCardStart = e => {
        const sourceCard = e.currentTarget;

        sourceCard.style.border = "dashed";
        e.dataTransfer.setData("text/plain", e.target.id)
    }

    render() {
        return (
            <div
                id="card_1"
                className="card"
                draggable="true"
                onDragStart={this.dragCardStart}>
                CARD
            </div>
        )
    }
}

export default Card;