import { combineReducers } from "@reduxjs/toolkit";
import { booksReducer } from "./Books";
import { cartReducer } from "./Cart";

export const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer,
});