import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes, DirectionTypes } from 'enums/flexTypes';
import { useState } from 'react';
import { Field } from 'ui/Field';
import { sortConfig } from './config';
import cx from 'classnames';
import './style.scss';

const SortPanel = () => {
    const [sortPanelIsOpened, setSortPanelIsOpened] = useState(false);
    const [currentSort, setCurrentSort] = useState<{id: string, title: string}>({id: 'titleAsc', title: 'От А до Я'});

    const handleChangeSort = (item: any) => {
        //Запрос с фильтрацией
        return setCurrentSort(item);
    }

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
                            <Field className='sort-panel__item' key={item.id} onClick={() => handleChangeSort(item)}>
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
