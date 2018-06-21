import { GET_CREATED_LISTS } from "./types";


export const getSavedLists = lists => {
    return {
        type: GET_CREATED_LISTS,
        payload: lists
    }
}