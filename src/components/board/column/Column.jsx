import React, { Component } from 'react';

// Components
import Card from "../card/Card.jsx";

// Assets
import "./column.css";


class Column extends Component {
    render() {
        return (
            <div className="column">
                Column
                <Card />
            </div>
        )
    }
}

export default Column;