import { AlignItemsTypes } from 'enums/flexTypes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'store/reducers/Books/actions';
import { Field } from 'ui/Field';
import { Filters } from './Filters';
import { Sort } from './Sort';
import './style.scss';

const SortAndFiltersPanel: React.FC<any> = () => {
    const dispatch = useDispatch();
    const sort = useSelector((state: any) => state.books.sort);
    const filters = useSelector((state: any) => state.books.filters);

    useEffect(() => {
        // @ts-ignore
        dispatch(getBooks(filters, sort));
    }, [sort, dispatch]);


    return (
        <Field className='sort-filter__container' ai={AlignItemsTypes.center}>
            <Sort />
            <Filters />
        </Field>
    )
}

export { SortAndFiltersPanel };
