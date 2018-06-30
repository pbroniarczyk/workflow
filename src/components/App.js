import React from 'react';

import { Provider } from "react-redux";
import store from "../store";

// Components
import Board from "../containers/board/Board.jsx";
import Navbar from "./navbar/Navbar.jsx";

// Assets
import './App.css';


const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<Navbar />
				<Board />
			</div>
		</Provider>
	);
}

export default App;
