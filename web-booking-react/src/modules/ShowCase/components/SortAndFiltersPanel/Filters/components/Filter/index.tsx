import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';
import { useEffect, useState } from 'react';
import { Field } from 'ui/Field';
import cx from 'classnames';
import './style.scss';
import { IFilters } from 'store/reducers/Books/helpers';
import { IFilterConfig } from '../../config';
import { FilterPanel } from './components/FilterPanel';

interface IFilter {
    item: IFilterConfig;
    currentPanel: any;
    setCurrentPanel: any;
    filters: IFilters | null;
    setFilters: any;
}

const Filter:React.FC<IFilter> = ({item, currentPanel, setCurrentPanel, filters, setFilters}) => {
    const [filterPanelIsOpened, setFilterPanelIsOpened] = useState(false);

    useEffect(() => {
        if (currentPanel !== item) {
            setFilterPanelIsOpened(false);
        }
    }, [currentPanel]);

    const handlerClick = (e: any) => {
        if (filterPanelIsOpened) {
            if (e.target.id === id || e.target.parentElement.id === id) {
                setCurrentPanel(null);
                return setFilterPanelIsOpened(!filterPanelIsOpened);
            }

            return;
        }

        setFilterPanelIsOpened(!filterPanelIsOpened);
        return setCurrentPanel(item);
    }

    const { id, title } = item;
    return (
        <Field 
            ai={AlignItemsTypes.center} 
            jc={JustifyContentTypes.center} 
            id={id}
            className={cx('filter', filterPanelIsOpened ? 'filter_isActive' : '')}
            onClick={handlerClick}
        >
            <p className="filter__title">{ title }</p>
            <FontAwesomeIcon icon={faChevronDown} className='filter__icon' />
            <FilterPanel 
                item={item} 
                panelIsOpen={filterPanelIsOpened} 
                setPanelIsOpen={setFilterPanelIsOpened} 
                filters={filters}
                setFilters={setFilters}
            />
        </Field>
    )
}

export { Filter };
