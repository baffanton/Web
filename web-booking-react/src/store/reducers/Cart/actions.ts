import { RequestTypesEnum } from "enums/requestTypes";
import { request } from "helpers/request";
import { CART_ADD_PRODUCT, IAddProductToCart } from "./types";

export const addProductToCart = (id: string) => (dispatch: (arg0: IAddProductToCart) => void) => {
    request(RequestTypesEnum.post, `/cart/${id}`, null)
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