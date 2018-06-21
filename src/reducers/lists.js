import { GET_CREATED_CARDS } from "../actions/types";

const initialState = {
    lists: [
        {
            title: "List - 1",
            listNumber: 1
        },
        {
            title: "List - 2",
            listNumber: 2
        },
        {
            title: "List - 3",
            listNumber: 3
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
    
        default:
            return state;
    }
}