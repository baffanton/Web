import { createOrder } from "./src/actions/createOrder";
import { getCart } from "./src/actions/getCart";
import { getCookie } from "./src/helpers/cookie";
import { getUserId } from "./src/helpers/user";
import { createCityHandlers } from "./src/modules/user-city/user-city";

const loadCartPage = () => {
    const userId = getUserId();
    if (!userId) {
        return null;
    }
    createCityHandlers();
    getCart(userId);

    // Повесим на кнопки действия
    const createOrderButton = document.getElementById("create-order-button");

    if (!createOrderButton) {
        return null;
    }
    
    createOrderButton.onclick = function () {
        const userCity = getCookie("city");
        if (!userId || !userCity) {
            return null;
        }
        const currentTime = new Date();
        createOrder(userId, userCity, currentTime);
    }
}

document.addEventListener("DOMContentLoaded", loadCartPage, { once: true });