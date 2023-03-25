import { SortDirectionEnum, SortTypeEnum } from "../enums";
import { loadBooksToShowCase } from "../helpers/loadBooks";
import { IFilters } from "../interfaces";

export const getBooks = (filters?: IFilters | null, sortType?: SortTypeEnum, sortDirection?: SortDirectionEnum) => {
    const configSettings = {
        type: sortType || SortTypeEnum.title,
        direction: sortDirection || SortDirectionEnum.ascend,
        filters: filters || null
    }

    // Создаем запрос
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:8082/books');
    
    // Настройка
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json')

    // Отправляем запрос
    xhr.send(JSON.stringify(configSettings));

    // Обрабатываем ответ
    xhr.onload = () => {
        if (xhr.status === 200) {
            return loadBooksToShowCase(xhr.response);
        } 
    }
};