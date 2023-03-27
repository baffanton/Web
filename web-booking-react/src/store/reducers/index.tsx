import { combineReducers } from "@reduxjs/toolkit";
import { booksReducer } from "./Books";
import { cartReducer } from "./Cart";
import { userReducer } from "./User";
import { windowReducer } from "./Window";

export const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer,
    user: userReducer,
    window: windowReducer
});