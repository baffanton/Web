import { faRubleSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes, DirectionTypes } from 'enums/flexTypes';
import { useDispatch } from 'react-redux';
import { addProductToCart } from 'store/reducers/Cart/actions';
import { Field } from 'ui/Field';
import './style.scss';

interface IBookInfo {
    id: number;
    title: string;
    author: string;
    publisher: string;
    pages: number;
    year: string;
    price: number;
}

const BookInfo: React.FC<IBookInfo> = ({ id, title, author, publisher, pages, year, price }) => {
    const dispatch = useDispatch();
    const handlerBuyBook = () => {
        // @ts-ignore
        return dispatch(addProductToCart(id));
    }
    return (
        <Field className='book-info' direction={DirectionTypes.column}>
            <p className='book-info__title'>{title}</p>
            <p className='book-info__author'>{author}</p>
            <p className='book-info__publisher'>Издатель: {publisher}</p>
            <p className='book-info__page-count'>Кол-во страниц: {pages}</p>
            <p className='book-info__year'>Год публикации: {year}</p>
            <Field className='book-price' ai={AlignItemsTypes.flexEnd}>
                <Field className='book-price__digit-container' ai={AlignItemsTypes.center}>
                    <p className="book-price__digit">{price}</p>
                    <FontAwesomeIcon className='book-price__icon' icon={faRubleSign} />
                </Field>
                <button className="book-price__button" onClick={handlerBuyBook}>Купить</button>
            </Field>
        </Field>
    )
}

export { BookInfo };
