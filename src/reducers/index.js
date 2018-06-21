import { combineReducers } from "redux";
import cards from "./cards";
import lists from "./lists";

export default combineReducers({
    listReducer: lists,
    cardReducer: cards
});