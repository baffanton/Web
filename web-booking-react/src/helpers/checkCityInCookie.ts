import { getCookie } from './cookie';

const checkCityInCookies = () => {
    const cityFromCookie = getCookie('city');

    return cityFromCookie;
}

export { checkCityInCookies };