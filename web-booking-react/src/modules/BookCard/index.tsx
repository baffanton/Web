import { IBook } from 'store/reducers/Books/helpers';
import { Field } from 'ui/Field';
import { BookInfo } from './components/BookInfo';
import './style.scss';

interface IBookCard {
    book: IBook;
}

const BookCard: React.FC<IBookCard> = ({ book }) => {
    const { id, picture, title, author, publisher, pages, year, price } = book;

    return (
        <Field key={id} className='book-card'>
            <Field className='book-card__container'>
                <Field className='book-card__image-container'>
                    <img id={`${id}__image`} className='book-card__image' src={picture} alt='' />
                </Field>
                <BookInfo 
                    title={title}
                    author={author}
                    publisher={publisher}
                    pages={pages}
                    year={year}
                    price={price} 
                />
            </Field>
        </Field>
    )
}

export { BookCard };
