import { DirectionTypes } from 'enums/flexTypes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from 'store/reducers/Cart/actions';
import { Field } from 'ui/Field';
import { Cart } from './components/Cart';
import { Order } from './components/Order';
import './style.scss';

const CartPage: React.FC<any> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getCart());
    }, [])

    return (
        <Field className='main' direction={DirectionTypes.column}>
            <Field className='cart-container'>
                <Cart />
                <Order />
            </Field>
        </Field>
    )
}

export { CartPage };
