import { GET_CREATED_CARDS, UPDATE_CARD_LIST } from "../actions/types";

const initialState = {
    cards: [
        {
            title: "Card 1",
            id: "123fr23g",
            currentList: 1
        },
        {
            title: "Card 2",
            id: "qwdfq21d",
            currentList: 1
        },
        {
            title: "Card 3",
            id: "sdg34vdc",
            currentList: 1
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CREATED_CARDS:
            return {
                ...state,
                cards: action.payload
            }

        case UPDATE_CARD_LIST:
            return {
                ...state,
                cards: action.payload
            }
    
        default:
            return state;
    }
}