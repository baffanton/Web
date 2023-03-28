import { ChangeCartEnum } from "enums/changeCartTypes";
import { RequestTypesEnum } from "enums/requestTypes";
import { request } from "helpers/request";
import { 
    CART_ADD_PRODUCT, 
    CART_GET_CART, 
    CART_GET_COUNT, 
    IAddProductToCart, 
    ICartGetCount, 
    IGetCart 
} from "./types";

export const addProductToCart = (id: number) => (dispatch: (arg0: IAddProductToCart) => void) => {
    request(RequestTypesEnum.post, `/cart/${id}`, null)
        .then((res: any) => {
            const { data } = res;

            return dispatch({
                type: CART_ADD_PRODUCT,
                count: data
            })
        })
        .catch((errors: any) => {
            console.log("Ошибка в запросе addProductToCart");
        })
};

export const getCountProduct = () => (dispatch: (arg0: ICartGetCount) => void) => {
    request(RequestTypesEnum.get, '/settings/count', null)
        .then((res: any) => {
            const { data } = res;

            return dispatch({
                type: CART_GET_COUNT,
                count: data
            })
        })
        .catch((errors: any) => {
            console.log('Ошибка в запросе getCountProduct');
        })
}

export const createOrder = (userCity: string, currentDate: Date) => (dispatch: (arg0: IGetCart) => void) => {
    const order = {
        city: userCity,
        date: currentDate
    };

    request(RequestTypesEnum.post, '/cart', order)
        .then(res => {
            request(RequestTypesEnum.get, '/cart', null)
                .then(res => {
                    const { count, price, books } = res.data;

                    dispatch({
                        type: CART_GET_CART,
                        count,
                        price,
                        books,
                    })
                })
        })
        .catch((errors) => {
            console.log('Ошибка в запросе createOrder');
        })
}

export const changeCart = (type: ChangeCartEnum, bookId: number) => (dispatch: (arg0: IGetCart) => void) => {
    let requestType: RequestTypesEnum = RequestTypesEnum.default;
    let url: string = `/cart/${bookId}`;
    switch (type) {
        case ChangeCartEnum.minus:
            requestType = RequestTypesEnum.delete;
            break;
        case ChangeCartEnum.plus:
            requestType = RequestTypesEnum.post;
            break;
        case ChangeCartEnum.delete:
            url = `/cart/all/${bookId}`;
            requestType = RequestTypesEnum.delete;
            break;
    }

    request(requestType, url, null)
        .then(res => {
            request(RequestTypesEnum.get, '/cart', null)
                .then(res => {
                    const { count, price, books } = res.data;

                    dispatch({
                        type: CART_GET_CART,
                        count,
                        price,
                        books,
                    })
                })
        })
        .catch((errors) => {
            console.log('Ошибка в запросе minusBook');
        })
}

export const getCart = () => (dispatch: (arg0: IGetCart) => void) => {
    request(RequestTypesEnum.get, '/cart', null)
        .then(res => {
            if (!res.data) {
                return null;
            }

            const { count, price, books } = res.data;

            return dispatch({
                type: CART_GET_CART,
                count,
                price,
                books
            })
        })
}