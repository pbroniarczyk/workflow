import React, { Component } from 'react';

// Components
import Card from "../card/Card.jsx";

// Assets
import "./column.css";


class Column extends Component {
    constructor(props) {
        super(props);

        this.dropCardHandler = this.dropCardHandler.bind(this);
    }

    dropCardHandler = e => {
        e.preventDefault();
        const dropData = e.dataTransfer;

        console.log("DROP TARGET", dropData);
    }

    componentDidMount = () => {
        console.dir(document.querySelector(".column"))
    }

    render() {
        return (
            <div
                className="column"
                onDrop={this.dropCardHandler}>
                Column
                <Card />
            </div>
        )
    }
}

export default Column;