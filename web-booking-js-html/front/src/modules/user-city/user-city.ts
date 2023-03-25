import { getCookie } from "../../helpers/cookie";
import { openWindowWithSelectCity } from "../select-city/select-city";

export const createCityHandlers = () => {
    const buttonCity = document.getElementById("city-name");

    if (!buttonCity) {
        return null;
    }

    const citySelected = getCookie("city");

    if (!citySelected) {
        openWindowWithSelectCity();
    } else {
        buttonCity.textContent = getCookie("city") || '';
    }

    buttonCity.onclick = function () {
        return openWindowWithSelectCity(buttonCity.textContent);
    }
}