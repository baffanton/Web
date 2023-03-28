export const CART_ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const CART_GET_COUNT = 'CART/GET_COUNT';
export const CART_CREATE_ORDER = 'CART/CREATE_ORDER';
export const CART_MINUS_BOOK = 'CART/MINUS_BOOK';
export const CART_PLUS_BOOK = 'CART/PLUS_BOOK';
export const CART_DELETE_BOOK = 'CART/DELETE_BOOK';
export const CART_GET_CART = 'CART/GET_CART';

export interface IAddProductToCart {
    type: typeof CART_ADD_PRODUCT;
    count: number;
}

export interface ICartGetCount {
    type: typeof CART_GET_COUNT;
    count: number;
}

export interface IGetCart {
    type: typeof CART_GET_CART;
    count: number;
    price: number;
    books: any[];
}

export interface ICartReducerModel {
    readonly count: number;
    readonly price: number;
    readonly books: any[];
}

export type ICartActionTypes =
    | IAddProductToCart
    | ICartGetCount
    | IGetCart;