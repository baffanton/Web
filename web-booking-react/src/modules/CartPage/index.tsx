import { DirectionTypes } from 'enums/flexTypes';
import { Field } from 'ui/Field';
import { Cart } from './components/Cart';
import { Order } from './components/Order';
import './style.scss';

const CartPage: React.FC<any> = () => {
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
