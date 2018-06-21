import React, { Component } from 'react';

import { Provider } from "react-redux";
import store from "../store";

// Components
import Board from "./board/Board.jsx";
import Navbar from "./navbar/Navbar.jsx";

// Assets
import './App.css';


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Navbar />
					<Board />
				</div>
			</Provider>
		);
	}
}

export default App;
