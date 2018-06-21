import { GET_CREATED_CARDS } from "./types";


export const getSavedCrds = cards => {
    return {
        type: GET_CREATED_CARDS,
        payload: cards
    }
}