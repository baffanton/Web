import { DirectionTypes } from 'enums/flexTypes';
import { useSelector } from 'react-redux';
import { Field } from 'ui/Field';
import { CartCard } from './components/CartCard';
import './style.scss';

interface IConfig {
    count: number;
    price: number;
    books: {
        id: number;
        picture: string;
        title: string;
        author: string;
        price: number;
        count: number;
    }[];
}

const Cart: React.FC<any> = () => {
    const books = useSelector((state: any) => state.cart.books);
    return (
        <Field direction={DirectionTypes.column} className='cart'>
            <p className='cart__title'>Корзина</p>
            <Field direction={DirectionTypes.column} className="cart__cards-container">
                {books.map((item) => {
                    return <CartCard key={item.id} item={item} />
                })}
            </Field>
        </Field>
    )
}

export { Cart };
