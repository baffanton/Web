export const CART_ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const CART_GET_COUNT = 'CART/GET_COUNT';

export interface IAddProductToCart {
    type: typeof CART_ADD_PRODUCT;
    productCount: number;
}

export interface ICartGetCount {
    type: typeof CART_GET_COUNT;
    productCount: number;
}

export interface ICartReducerModel {
    readonly productCount: number;
}

export type ICartActionTypes =
    | IAddProductToCart
    | ICartGetCount;