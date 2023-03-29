import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes } from 'enums/flexTypes';
import { useEffect, useState } from 'react';
import { Field } from 'ui/Field';
import { defaultSortConfig, ISortConfig } from './components/SortPanel/config';
import { useDispatch } from 'react-redux';
import { changeSort } from 'store/reducers/Books/actions';
import cx from 'classnames';
import './style.scss';
import { SortPanel } from './components/SortPanel';


const Sort: React.FC<any> = () => {
    const dispatch = useDispatch();
    const [sortPanelIsOpened, setSortPanelIsOpened] = useState(false);
    const [currentSort, setCurrentSort] = useState<ISortConfig>(defaultSortConfig);

    useEffect(() => {
        // @ts-ignore
        dispatch(changeSort({type: currentSort.type, direction: currentSort.direction}));
    }, [currentSort, dispatch])

    return (
        <Field 
            className={cx('sort', sortPanelIsOpened ? 'sort_isActive' : '')} 
            ai={AlignItemsTypes.center} 
            onClick={() => setSortPanelIsOpened(!sortPanelIsOpened)}
        >
            <FontAwesomeIcon icon={faSort} className='sort__icon' />
            <p className="sort__title">{currentSort.title}</p>
            {sortPanelIsOpened && (
                <SortPanel onClick={(item: ISortConfig) => setCurrentSort(item)} />
            )}
        </Field>
    )
}

export { Sort };
