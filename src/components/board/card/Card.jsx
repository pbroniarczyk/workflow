import React, { Component } from 'react'

// Assets
import "./card.css";


class Card extends Component {
    render() {
        return (
            <div
                id={this.props.card.id}
                className="card"
                draggable
                onDragStart={e => this.props.dragCardStart(e, this.props.card)}>

                {this.props.card.title}
            </div>
        )
    }
}

export default Card;