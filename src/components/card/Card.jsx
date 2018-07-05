import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Assets
import "./card.css";


const Card = props => {
    return (
        <Link to={{ 
            pathname: `/${props.card.id}`,
            modal: true }}>
            <div
                data-id={props.card.id}
                className="card"
                draggable
                onDragStart={e => props.dragCardStart(e, props.card)}>

                {props.card.title}
            </div>
        </Link>
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