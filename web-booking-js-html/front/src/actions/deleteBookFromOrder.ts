import { getCart } from "./getCart";

export const deleteBookFromOrder = (userId: string, bookId: number) => {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://127.0.0.1:8082/cart/all/${userId}/${bookId}`);

    // Отправляем запрос
    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200) {
            getCart(userId);
            alert("Книга удалена!");
        }
    }
    
}