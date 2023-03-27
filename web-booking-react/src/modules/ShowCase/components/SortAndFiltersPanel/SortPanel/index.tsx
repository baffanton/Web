import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes, DirectionTypes } from 'enums/flexTypes';
import { useEffect, useState } from 'react';
import { Field } from 'ui/Field';
import { defaultSortConfig, ISortConfig, sortConfig } from './config';
import cx from 'classnames';
import './style.scss';
import { useDispatch } from 'react-redux';
import { changeSort, getBooks } from 'store/reducers/Books/actions';

const SortPanel = () => {
    const dispatch = useDispatch();
    const [sortPanelIsOpened, setSortPanelIsOpened] = useState(false);
    const [currentSort, setCurrentSort] = useState<ISortConfig>(defaultSortConfig);

    useEffect(() => {
        // @ts-ignore
        dispatch(changeSort({type: currentSort.type, direction: currentSort.direction}));
    }, [currentSort])

    return (
        <Field 
            className={cx('sort', sortPanelIsOpened ? 'sort_isActive' : '')} 
            ai={AlignItemsTypes.center} 
            onClick={() => setSortPanelIsOpened(!sortPanelIsOpened)}
        >
            <FontAwesomeIcon icon={faSort} className='sort__icon' />
            <p className="sort__title">{currentSort.title}</p>
            {sortPanelIsOpened && (
                <Field direction={DirectionTypes.column} className='sort-panel'>
                    {sortConfig.map((item) => {
                        return (
                            <Field className='sort-panel__item' key={item.id} onClick={() => setCurrentSort(item)}>
                                <FontAwesomeIcon className='sort-panel__icon' icon={item.icon} />
                                <p className='sort-panel__title'>{item.title}</p>
                            </Field>
                        )
                    })}
                </Field>
            )}
        </Field>
    )
}

export { SortPanel };
