import { faRubleSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes, DirectionTypes } from 'enums/flexTypes';
import { Field } from 'ui/Field';
import './style.scss';

interface IBookInfo {
    title: string;
    author: string;
    publisher: string;
    pages: number;
    year: string;
    price: number;
}

const BookInfo: React.FC<IBookInfo> = ({ title, author, publisher, pages, year, price }) => {
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
                <button className="book-price__button">Купить</button>
            </Field>
        </Field>
    )
}

export { BookInfo };
