import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes } from 'enums/flexTypes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilters, getBooks } from 'store/reducers/Books/actions';
import { defaultFilters, defaultSort, IFilters } from 'store/reducers/Books/helpers';
import { Field } from 'ui/Field';
import { Filter } from './components/Filter';
import { filtersConfig } from './config';
import './style.scss';

const FilterPanel: React.FC<any> = () => {
    const dispatch = useDispatch();
    const [currentPanel, setCurrentPanel] = useState<any>(null);
    const [currentFilters, setCurrentFilters] = useState<IFilters>(defaultFilters);

    const filters = useSelector((state: any) => state.books.filters);
    const sort = useSelector((state: any) => state.books.sort);

    useEffect(() => {
        // @ts-ignore
        dispatch(changeFilters(currentFilters));
    }, [currentFilters]);

    const handlerClick = () => {
        debugger;
        // @ts-ignore
        return dispatch(getBooks(filters, sort));
    }

    const handlerClear = () => {
        // @ts-ignore
        dispatch(changeFilters(defaultFilters));
        // @ts-ignore
        dispatch(changeSort(defaultSort));
        // @ts-ignore
        return dispatch(getBooks(defaultFilters, defaultSort));
    }

    return (
        <>
            <Field className='filter-container' ai={AlignItemsTypes.center}>
                {filtersConfig.map((item) => {
                    return (
                        <Filter 
                            item={item} 
                            currentPanel={currentPanel} 
                            setCurrentPanel={setCurrentPanel} 
                            key={item.id} 
                            filters={currentFilters}
                            setFilters={setCurrentFilters}
                        />
                    )
                })}
            </Field>
            <Field className='filter-button' ai={AlignItemsTypes.center}>
                <button className="filter-button__apply" onClick={handlerClick}>Применить</button>
                <FontAwesomeIcon onClick={handlerClear} className='filter-button__clear' icon={faArrowRotateLeft} />
            </Field>
        </>
    )
}

export { FilterPanel };
