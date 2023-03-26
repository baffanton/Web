import { createStateSelector } from "../helpers";

const cart = {
    productCount: createStateSelector('cart.productCount'),
};

export { cart };
