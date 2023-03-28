import { createStateSelector } from "../helpers";

const cart = {
    count: createStateSelector('cart.count'),
    price: createStateSelector('cart.price'),
    books: createStateSelector('cart.books')
};

export { cart };
