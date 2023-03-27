import { getCookie } from "helpers/cookie"

const checkCityInCookies = () => {
    const cityFromCookie = getCookie('city');

    return cityFromCookie
}

export { checkCityInCookies };
