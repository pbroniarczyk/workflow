import React, { Component } from 'react'

// Assets
import "./card.css";


class Card extends Component {
    constructor(props) {
        super(props);

        this.dragCardStart = this.dragCardStart.bind(this);
    }

    dragCardStart = event => {
        const sourceCard = event.currentTarget;

        sourceCard.style.border = "dashed";
        event.dataTransfer.setData("text/plain", event.target.id)
        console.log("DRAGGED CARD", event.dataTransfer.setData("text/plain", event.target.id))
    }

    render() {
        return (
            <div
                id={this.props.id}
                className="card"
                draggable="true"
                onDragStart={this.dragCardStart}>
                {this.props.title}
            </div>
        )
    }
}

export default Card;