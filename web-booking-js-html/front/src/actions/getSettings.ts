import { setUserId } from "../helpers/user";

export const getSettings = () => {
    // Создаем запрос
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://127.0.0.1:8082/settings/session`);

    // Отправляем запрос
    xhr.send();

    xhr.onload = function() {
        if (xhr.status === 200) {
            setUserId(xhr.responseText);
        }
    }
}