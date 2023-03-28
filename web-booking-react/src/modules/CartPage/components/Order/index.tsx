import { DirectionTypes, JustifyContentTypes } from 'enums/flexTypes';
import { getCookie } from 'helpers/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from 'store/reducers/Cart/actions';
import { Field } from 'ui/Field';
import './style.scss';

const Order: React.FC<any> = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.cart.count);
    const price = useSelector((state: any) => state.cart.price);

    const handlerClick = () => {
        const userCity = getCookie("city");
        if (!userCity) {
            return null;
        }
        const currentTime = new Date();
        // @ts-ignore
        dispatch(createOrder(userCity, currentTime));
    }

    return (
        <Field direction={DirectionTypes.column} className='order'>
            <p className='order__title'>Оформление заказа</p>
            <Field direction={DirectionTypes.column} className='order__container'>
                <Field jc={JustifyContentTypes.spaceBetween}>
                    <p className='order__product-title'>Товары ({count}):</p>
                    <p className='order__product-price'>{price}</p>
                </Field>
                <Field jc={JustifyContentTypes.spaceBetween}>
                    <p className='order__product-title'>Скидка:</p>
                    <p className='order__product-price'>0</p>
                </Field>
                <Field className='order__total' jc={JustifyContentTypes.spaceBetween}>
                    <p className='order__product-title order__product-title_isTotal'>Итого к оплате:</p>
                    <p className='order__product-title order__product-price_isTotal'>{price}</p>
                </Field>
                <button onClick={handlerClick} className='order__create-order'>Оформить заказ</button>
            </Field>
        </Field>
    );
}

export { Order };
