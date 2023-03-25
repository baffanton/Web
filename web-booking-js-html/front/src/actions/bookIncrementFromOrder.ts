import { getCart } from "./getCart";

export const bookIncrementFromOrder = (userId: string, bookId: number) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `http://127.0.0.1:8082/cart/${userId}/${bookId}`);

    // Отправляем запрос
    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200) {
            getCart(userId);
        }
    }
}