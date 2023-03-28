import { RequestTypesEnum } from "enums/requestTypes";
import { request } from "helpers/request";
import { defaultSort, IFilters, ISort } from "./helpers";
import { BOOKS_CHANGE_FILTERS, BOOKS_CHANGE_SORT, BOOKS_GET, IChangeFilters, IChangeSort, IGetBooks } from "./types";

export const getBooks = (filters?: IFilters, sort?: ISort) => (dispatch: (arg0: IGetBooks) => never) => {
    // const config = [
    //     {
    //         "id":4,
    //         "picture":"https://cdn.img-gorod.ru/310x500/nomenclature/29/206/2920688.jpg",
    //         "title":"Все в его поцелуе",
    //         "author":"Джулия Куин",
    //         "publisher":"АСТ",
    //         "pages":320,
    //         "year":"2023",
    //         "age":16,
    //         "price":450,
    //         "genre":"Романтика"
    //     },
    //     {
    //         "id":5,
    //         "picture":"https://cdn.img-gorod.ru/310x500/nomenclature/29/638/2963845.jpg",
    //         "title":"Гибельное влияние",
    //         "author":"Майк Омер",
    //         "publisher":"INSPIRIA",
    //         "pages":416,
    //         "year":"2023",
    //         "age":16,
    //         "price":690,
    //         "genre":"Боевик"
    //     },
    //     {
    //         "id":1,
    //         "picture":"https://cdn.img-gorod.ru/1202x699/nomenclature/29/572/2957262.jpg",
    //         "title":"Колокол",
    //         "author":"Лора Кейли",
    //         "publisher":"Эксмо",
    //         "pages":384,
    //         "year":"2023",
    //         "age":16,
    //         "price":558,
    //         "genre":"Детектив"
    //     },
    //     {
    //         "id":3,
    //         "picture":"https://cdn.img-gorod.ru/1202x699/nomenclature/29/547/2954787.jpg",
    //         "title":"Основатель Тёмного Пути. Том 2",
    //         "author":"Мосян Тунсю",
    //         "publisher":"Эксмо",
    //         "pages":216,
    //         "year":"2022",
    //         "age":16,
    //         "price":1050,
    //         "genre":"Комиксы"
    //     },
    //     {
    //         "id":2,
    //         "picture":"https://cdn.img-gorod.ru/310x500/nomenclature/29/448/2944827.jpg",
    //         "title":"Человек-бензопила. Книга 6. Вперед",
    //         "author":"Тацуки Фудзимото",
    //         "publisher":"Азбука",
    //         "pages":192,
    //         "year":"2022",
    //         "age":18,
    //         "price":633,
    //         "genre":"Комиксы"
    //     }
    // ];

    // return dispatch({
    //     type: BOOKS_GET,
    //     books: config
    // })

    const schema = {
        filters: filters || null,
        type: sort ? sort.type : defaultSort.type,
        direction: sort ? sort.direction : defaultSort.direction
    }
    request(RequestTypesEnum.post, `http://127.0.0.1:8082/books`, schema)
        .then((res: any) => {
            const { data } = res;

            return dispatch({
                type: BOOKS_GET,
                books: data
            })
        })
        .catch((errors: any) => {
            console.log("Ошибка в запросе getBooks");
        })
};

export const changeFilters = (filters: IFilters) => (dispatch: (arg0: IChangeFilters) => void) => {
    dispatch({
        type: BOOKS_CHANGE_FILTERS,
        filters
    })
}

export const changeSort = (sort: ISort) => (dispatch: (arg0: IChangeSort) => void) => {
    dispatch({
        type: BOOKS_CHANGE_SORT,
        sort
    })
}
    