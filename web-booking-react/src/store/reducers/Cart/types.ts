export const CART_ADD_PRODUCT = 'CART/ADD_PRODUCT';

export interface IAddProductToCart {
    type: typeof CART_ADD_PRODUCT;
    productCount: number;
}

export interface ICartReducerModel {
    readonly productCount: number;
}

export type ICartActionTypes =
    | IAddProductToCart;