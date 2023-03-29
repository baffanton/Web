import { DirectionTypes } from 'enums/flexTypes';
import React from 'react';
import { Field } from 'ui/Field';
import { SortAndFiltersPanel } from './components/SortAndFiltersPanel';
import { ShowCasePanel } from './components/ShowCasePanel';
import { useSelector } from 'react-redux';
import './style.scss'

const ShowCase: React.FC<any> = () => {
    const books = useSelector((state: any) => state.books.books);

    return (
        <Field className='showcase' direction={DirectionTypes.column}>
            <SortAndFiltersPanel />
            <ShowCasePanel books={books} />
        </Field>
    );
}

export { ShowCase };
