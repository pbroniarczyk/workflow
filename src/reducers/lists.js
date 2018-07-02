import { GET_CREATED_CARDS, TOGGLE_NEW_CARD_FORM } from "../actions/types";

const initialState = {
    lists: [
        {
            title: "List - 1",
            listNumber: 1,
            addCardVisible: false
        },
        {
            title: "List - 2",
            listNumber: 2,
            addCardVisible: false
        },
        {
            title: "List - 3",
            listNumber: 3,
            addCardVisible: false
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CREATED_CARDS:
            return {
                ...state,
                lists: action.payload
            }
    
        case TOGGLE_NEW_CARD_FORM:
            return {
                ...state,
                lists: action.payload
            }
                
        default:
            return state;
    }
}