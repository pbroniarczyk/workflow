import React from 'react';
import PropTypes from "prop-types";

// Assets
import "./card.css";


const Card = props => {
    return (
        <div
            data-id={props.card.id}
            className="card"
            draggable
            onDragStart={e => props.dragCardStart(e, props.card)}>

            {props.card.title}
        </div>
    );
}


Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string
    }),
    dragCardStart: PropTypes.func.isRequired
}

export default Card;