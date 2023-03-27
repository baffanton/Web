import { RequestTypesEnum } from "enums/requestTypes";
import { getCookie } from "helpers/cookie";
import { request } from "helpers/request";
import { CART_ADD_PRODUCT, CART_GET_COUNT, IAddProductToCart, ICartGetCount } from "./types";

export const addProductToCart = (id: number) => (dispatch: (arg0: IAddProductToCart) => void) => {
    request(RequestTypesEnum.post, `http://127.0.0.1:8082/cart/${id}`, null)
        .then((res: any) => {
            const { data } = res;

            return dispatch({
                type: CART_ADD_PRODUCT,
                productCount: data
            })
        })
        .catch((errors: any) => {
            console.log("Ошибка в запросе addProductToCart");
        })
};

export const getCountProduct = () => (dispatch: (arg0: ICartGetCount) => void) => {
    request(RequestTypesEnum.get, 'http://127.0.0.1:8082/settings/count', null)
        .then((res: any) => {
            const { data } = res;

            return dispatch({
                type: CART_GET_COUNT,
                productCount: data
            })
        })
        .catch((errors: any) => {
            console.log('Ошибка в запросе getCountProduct');
        })
}