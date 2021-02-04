
import { ADD_TO_CART, REMOVE_FROM_CART } from './../constants';

export function addToCart(data) {
    return {
        type: ADD_TO_CART,
        data: data
    };
}

export function removeFromCart() {
    return {
        type: REMOVE_FROM_CART
    }
}