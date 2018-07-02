import { 
    GET_CREATED_CARDS,
    UPDATE_CARD_LIST,
    NEW_CARD_TITLE,
    ADD_NEW_CARD
} from "./types";


export const getSavedCrds = cards => {
    return {
        type: GET_CREATED_CARDS,
        payload: cards
    }
}

export const updateCardList = cardArray => {
    return {
        type: UPDATE_CARD_LIST,
        payload: cardArray
    }
}

export const newCardTitle = title => {
    return {
        type: NEW_CARD_TITLE,
        payload: title
    }
}

export const addNewCard = cardArray => {
    return {
        type: ADD_NEW_CARD,
        payload: cardArray
    }
}