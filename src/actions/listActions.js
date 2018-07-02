import { GET_CREATED_LISTS, TOGGLE_NEW_CARD_FORM } from "./types";


export const getSavedLists = lists => {
    return {
        type: GET_CREATED_LISTS,
        payload: lists
    }
}

export const toggleNewCardForm = lists => {
    return {
        type: TOGGLE_NEW_CARD_FORM,
        payload: lists
    }
}