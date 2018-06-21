import React, { Component } from 'react';
import PropTypes from "prop-types";

// Assets
import "./card.css";


class Card extends Component {
    render() {
        return (
            <div
                data-id={this.props.card.id}
                className="card"
                draggable
                onDragStart={e => this.props.dragCardStart(e, this.props.card)}>

                {this.props.card.title}
            </div>
        )
    }
}


Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string
    }),
    dragCardStart: PropTypes.func.isRequired
}

export default Card;