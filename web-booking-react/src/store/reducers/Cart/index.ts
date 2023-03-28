import { CART_ADD_PRODUCT, CART_CREATE_ORDER, CART_DELETE_BOOK, CART_GET_CART, CART_GET_COUNT, CART_MINUS_BOOK, CART_PLUS_BOOK, ICartActionTypes, ICartReducerModel } from "./types";

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
        case CART_CREATE_ORDER:
        case CART_MINUS_BOOK:
        case CART_PLUS_BOOK:
        case CART_DELETE_BOOK:
            return {
                ...state
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