import { CART_ADD_PRODUCT, CART_GET_COUNT, ICartActionTypes, ICartReducerModel } from "./types";

const initialState: ICartReducerModel = {
    productCount: 0,
};

export function cartReducer(state = initialState, action: ICartActionTypes) {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            return {
                ...state,
                productCount: action.productCount,
            };
        case CART_GET_COUNT:
            return {
                ...state,
                productCount: action.productCount,
            }
        default:
            return state;
    }
}