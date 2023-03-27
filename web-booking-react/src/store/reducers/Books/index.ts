import { defaultFilters, defaultSort } from "./helpers";
import { BOOKS_CHANGE_FILTERS, BOOKS_CHANGE_SORT, BOOKS_GET, IBooksActionTypes, IBooksReducerModel } from "./types";

const initialState: IBooksReducerModel = {
    books: [],
    filters: defaultFilters,
    sort: defaultSort,
};

export function booksReducer(state = initialState, action: IBooksActionTypes) {
    switch (action.type) {
        case BOOKS_GET:
            return {
                ...state,
                books: action.books,
            };
        case BOOKS_CHANGE_FILTERS:
            return {
                ...state,
                filters: action.filters
            }
        case BOOKS_CHANGE_SORT:
            return {
                ...state,
                sort: action.sort
            }
        default:
            return state;
    }
}