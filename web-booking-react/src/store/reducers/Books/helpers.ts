import { SortDirectionEnum, SortTypeEnum } from "enums/sortTypes";

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

export interface IFilters {
    genre: string | null;
    ageContent: string | null;
    price: {
        min: string | null;
        max: string | null;
    } | null;
}

export const defaultFilters: IFilters = {
    genre: null,
    ageContent: null,
    price: null
}

export interface ISort {
    type: SortTypeEnum;
    direction: SortDirectionEnum;
}

export const defaultSort: ISort = {
    type: SortTypeEnum.title,
    direction: SortDirectionEnum.asc
}