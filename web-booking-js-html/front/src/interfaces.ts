export interface IBook {
    id: number;
    picture: string;
    title: string;
    author: string;
    publisher: string;
    year: string;
    price: number;
    age: number;
    pages: number;
    genre: string;
}

export interface IShortBook {
    id: number;
    picture: string;
    title: string;
    author: string;
    price: number;
    count: number;
}

export interface ICart {
    count: number,
    price: number,
    books: IShortBook[]
}

export interface IFilters {
    genre?: string | null;
    age?: string | null;
    price?: {
        min: number | null;
        max: number | null;
    } | null;
}
  