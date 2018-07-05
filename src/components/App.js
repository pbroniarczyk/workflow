import React from 'react';

import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Board from "../containers/board/Board.jsx";
import Navbar from "./navbar/Navbar.jsx";
import CardDetails from "../containers/cardDetails/CardDetails.jsx";

// Assets
import './App.css';


const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<div>
					<Route exact path="/" render={() => (
						<div className="App">
							<Navbar />
							<Board />
						</div>
						)} />
					<Route path="/:id" component={CardDetails} />
				</div>
			</Provider>
		</Router>
	);
}

export default App;
