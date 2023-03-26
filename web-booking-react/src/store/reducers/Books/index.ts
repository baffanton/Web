import { BOOKS_GET, BOOKS_GET_FILTERS, BOOKS_GET_SORT, IBooksActionTypes, IBooksReducerModel } from "./types";

const initialState: IBooksReducerModel = {
    books: [],
    filters: [],
    sort: [],
};

export function booksReducer(state = initialState, action: IBooksActionTypes) {
    switch (action.type) {
        case BOOKS_GET:
            return {
                ...state,
                books: action.books,
            };
        case BOOKS_GET_FILTERS:
            return {
                ...state,
                filters: action.filters,
            };
        case BOOKS_GET_SORT:
            return {
                ...state,
                sort: action.sort,
            };
        default:
            return state;
    }
}