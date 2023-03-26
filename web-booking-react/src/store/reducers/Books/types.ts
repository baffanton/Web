import { IBook } from "./helpers";

export const BOOKS_GET = 'BOOKS/GET';
export const BOOKS_GET_FILTERS = 'BOOKS/GET_FILTERS';
export const BOOKS_GET_SORT = 'BOOKS/GET_SORT';

export interface IGetBooks {
    type: typeof BOOKS_GET;
    books: IBook[];
}

export interface IGetFilters {
    type: typeof BOOKS_GET_FILTERS;
    filters: {
        id: string;
        title: string;
    }[];
}

export interface IGetSort {
    type: typeof BOOKS_GET_SORT;
    sort: {
        id: string;
        title: string;
    }[];
}

export interface IBooksReducerModel {
    readonly books: IBook[];
    readonly filters: {
        id: string;
        title: string;
    }[];
    readonly sort: {
        id: string;
        title: string;
    }[];
}

export type IBooksActionTypes =
    | IGetBooks
    | IGetFilters
    | IGetSort;