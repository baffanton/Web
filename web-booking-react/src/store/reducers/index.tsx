import { combineReducers } from "@reduxjs/toolkit";
import { booksReducer } from "./Books";
import { cartReducer } from "./Cart";
import { modalReducer } from "./Modal";
import { userReducer } from "./User";

export const reducer = combineReducers({
    books: booksReducer,
    cart: cartReducer,
    user: userReducer,
    modal: modalReducer
});
