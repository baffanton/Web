import { BookCard } from 'modules/BookCard';
import { IBook } from 'store/reducers/Books/helpers';
import { Field } from 'ui/Field';
import './style.scss';

interface IShowCasePanel {
    books: IBook[];
}

const ShowCasePanel: React.FC<IShowCasePanel> = ({ books }) => {
    return (
        <Field className='showcase'>
            {books.map(item => {
                return (
                    <BookCard key={item.id} book={item} />
                )
            })}
        </Field>
        
    );
}

export { ShowCasePanel };
