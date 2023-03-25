import { CitiesEnum } from "../../enums";
import { setCookie } from "../../helpers/cookie";
import { configCities } from "./configCities";

export const openWindowWithSelectCity = (activeCity?: string | null) => {
    const blockedPage = document.createElement("div");
    const body = document.body;
    blockedPage.classList.add("blocked-page");
    body.appendChild(blockedPage);

    const newWindow = document.createElement("div");
    newWindow.classList.add("select-city");
    newWindow.addEventListener("click", clickListener);
    newWindow.innerHTML = `
        <p class="select-city__title">Выберите город</p>
        <ul id="select-city__list" class="select-city__list">
            <li class="select-city__item ${activeCity === CitiesEnum.moscow ? "select-city__item__isActive" : ''}" id="moscow">Москва</li>
            <li class="select-city__item ${activeCity === CitiesEnum.chelyabinsk ? "select-city__item_isActive" : ''}" id="chelyabinsk">Челябинск</li>
            <li class="select-city__item ${activeCity === CitiesEnum.ekaterinburg ? "select-city__item_isActive" : ''}" id="ekaterinburg">Екатеринбург</li>
            <li class="select-city__item ${activeCity === CitiesEnum.krasnodar ? "select-city__item_isActive" : ''}" id="krasnodar">Краснодар</li>
            <li class="select-city__item ${activeCity === CitiesEnum.perm ? "select-city__item_isActive" : ''}" id="perm">Пермь</li>
            <li class="select-city__item ${activeCity === CitiesEnum.novosibirsk ? "select-city__item_isActive" : ''}" id="novosibirsk">Новосибирск</li>
            <li class="select-city__item ${activeCity === CitiesEnum.samara ? "select-city__item_isActive" : ''}" id="samara">Самара</li>
            <li class="select-city__item ${activeCity === CitiesEnum.ufa ? "select-city__item_isActive" : ''}" id="ufa">Уфа</li>
        </ul>
    `;
    body.appendChild(newWindow);
};

const clickListener = (e: any) => {
    const cityName = e.target.textContent;
    const isClickedOnCity = configCities.indexOf(cityName) >= 0;

    if (isClickedOnCity) {
        const element = document.getElementById("city-name");
        element!.textContent = cityName;
        setCookie("city", cityName);

        const windowWithCities = document.getElementsByClassName("select-city")[0];
        const blockedPage = document.getElementsByClassName("blocked-page")[0];
        
        document.body.removeChild(windowWithCities);
        document.body.removeChild(blockedPage);

        document.removeEventListener("click", clickListener);
    }
}