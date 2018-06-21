export const GET_CREATED_CARDS = "GET_CREATED_CARDS";


export const getSavedCards = (savedCards) => {
    return {
        type: GET_CREATED_CARDS,
        payload: savedCards
    }
};