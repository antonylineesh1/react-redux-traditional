import { ADD_TO_CART, REMOVE_FROM_CART } from './../constants';
const initialState = {
    cardData: []
}

export default function cardItems(state = [], action) {

    console.log('action', action);

    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cardData: action.data }
            ]

        case REMOVE_FROM_CART:
            const indexToRemove = state.length - 1;
            return state.filter((_, i) => i !== indexToRemove);
        default:
            return state;
    }

}