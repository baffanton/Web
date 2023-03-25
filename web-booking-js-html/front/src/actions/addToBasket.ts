import { getBasketCount, setBasketCount } from "../helpers/loadBooks";

export const addToBasket = (id: number, userId: string) => {
    // Создаем запрос
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `http://127.0.0.1:8082/cart/${userId}/${id}`);
   

    // Отправляем запрос
    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200) {
            const currentCount = getBasketCount();
            setBasketCount(currentCount + 1);
        }
    }
}