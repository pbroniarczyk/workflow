import { 
    GET_CREATED_CARDS,
    UPDATE_CARD_LIST,
    NEW_CARD_TITLE,
    ADD_NEW_CARD
} from "../actions/types";


const initialState = {
    cardTitle: "",
    cards: [
        {
            title: "Card 1",
            id: 1530561513150,
            currentList: 1
        },
        {
            title: "Card 2",
            id: 1570562513140,
            currentList: 1
        },
        {
            title: "Card 3",
            id: 3538561313160,
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

        case NEW_CARD_TITLE:
            return {
                ...state,
                cardTitle: action.payload
            }

        case ADD_NEW_CARD:
            return {
                ...state,
                cards: action.payload
            }
    
        default:
            return state;
    }
}