import { CART_ADD_PRODUCT, ICartActionTypes, ICartReducerModel } from "./types";

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
        default:
            return state;
    }
}