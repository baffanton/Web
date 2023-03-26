import { createStateSelector } from "../helpers";

const books = {
    books: createStateSelector('books.books'),
    filters: createStateSelector('books.filters'),
    sort: createStateSelector('books.sort'),
};

export { books };
