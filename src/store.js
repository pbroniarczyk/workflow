import { createStore, applyMiddleware, compose } from "redux";
import thunk from "react-redux";

const initialState = {};
const middleware = [thunk];
const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(
    initialState,
    composeEnhencer(
        applyMiddleware(...middleware)
    )
);

export default store;
