import { DirectionTypes } from 'enums/flexTypes';
import React from 'react';
import { Field } from 'ui/Field';
import { SortAndFiltersPanel } from './components/SortAndFiltersPanel';
import { ShowCasePanel } from './components/ShowCasePanel';
import './style.scss'
import { useSelector } from 'react-redux';

interface IShowCase {
};

const ShowCase: React.FC<IShowCase> = () => {
    const books = useSelector((state: any) => state.books.books);

    return (
        <Field className='main' direction={DirectionTypes.column}>
            <SortAndFiltersPanel></SortAndFiltersPanel>
            <ShowCasePanel books={books}></ShowCasePanel>
        </Field>
    );
}

export { ShowCase };
