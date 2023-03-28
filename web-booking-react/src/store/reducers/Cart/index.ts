import { CART_ADD_PRODUCT, CART_GET_CART, CART_GET_COUNT, ICartActionTypes, ICartReducerModel } from "./types";

const initialState: ICartReducerModel = {
    count: 0,
    price: 0,
    books: []
};

export function cartReducer(state = initialState, action: ICartActionTypes) {
    switch (action.type) {
        case CART_ADD_PRODUCT:
        case CART_GET_COUNT:
            return {
                ...state,
                count: action.count,
            };
        case CART_GET_CART:
            return {
                ...state,
                count: action.count,
                price: action.price,
                books: action.books
            };
        default:
            return state;
    }
}