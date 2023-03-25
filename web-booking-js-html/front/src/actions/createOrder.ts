import { setUserId } from "../helpers/user";
import { getCart } from "./getCart";

export const createOrder = (userId: string, userCity: string, currentDate: Date) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `http://127.0.0.1:8082/cart`);

    const order = {
        session: userId,
        city: userCity,
        date: currentDate
    };

    // Настройка
    xhr.setRequestHeader('Content-Type', 'application/json')

    // Отправляем запрос
    xhr.send(JSON.stringify(order));

    xhr.onload = function () {
        if (xhr.status === 201) {
            setUserId(xhr.responseText);
            getCart(xhr.responseText);
            alert("Заказ успешно оформлен!");
        }
    }
}