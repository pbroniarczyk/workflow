import React, { Component } from 'react';

// Components
import Board from "./board/Board.jsx";
import Navbar from "./navbar/Navbar.jsx";

// Assets
import './App.css';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Board />
			</div>
		);
	}
}

export default App;
