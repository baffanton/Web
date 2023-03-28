import { IBook, IFilters, ISort } from "./helpers";

export const BOOKS_GET = 'BOOKS/GET';
export const BOOKS_CHANGE_FILTERS = 'BOOKS/CHANGE_FILTERS';
export const BOOKS_CHANGE_SORT = 'BOOKS/CHANGE_SORT';

export interface IGetBooks {
    type: typeof BOOKS_GET;
    books: IBook[];
}

export interface IChangeFilters {
    type: typeof BOOKS_CHANGE_FILTERS;
    filters: IFilters;
}

export interface IChangeSort {
    type: typeof BOOKS_CHANGE_SORT;
    sort: ISort;
}

export interface IBooksReducerModel {
    readonly books: IBook[];
    readonly filters: IFilters | null;
    readonly sort: ISort;
}

export type IBooksActionTypes =
    | IGetBooks
    | IChangeFilters
    | IChangeSort;