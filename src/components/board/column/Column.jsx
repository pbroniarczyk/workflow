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
        console.log("DROP TARGET", dropData);
        e.preventDefault();
        const dropData = e.dataTransfer.getData("text");
    }

    componentDidMount = () => {
        console.dir(document.querySelector(".column"))
    }

    render() {
        const allTasks = this.props.tasks;
        const filteredTasks = allTasks.filter(task => task.currentList === this.props.columnNumber)

        return (
            <div
                className="column"
                id={this.props.columnNumber}
                onDragOver={this.dropCardHandler}>
                
                {this.props.title}
                
                {
                    filteredTasks.map((task, i) =>
                        <Card
                            title={task.title} 
                            id={task.id}
                            key={task.id}/>
                    )
                }
                
            </div>
        )
    }
}

export default Column;