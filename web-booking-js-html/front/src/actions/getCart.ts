import { loadBooksToCart } from "../helpers/loadBooks";

export const getCart = (userId: string) => {
    // Создаем запрос
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://127.0.0.1:8082/cart/${userId}`);
    
    // Настройка
    xhr.responseType = 'json';

    // Отправляем запрос
    xhr.send();

    // Обрабатываем ответ
    xhr.onload = () => {
        if (xhr.status === 200) {
            return loadBooksToCart(xhr.response);
        } 
    }
}