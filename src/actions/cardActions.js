import { GET_CREATED_CARDS, UPDATE_CARD_LIST } from "./types";


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