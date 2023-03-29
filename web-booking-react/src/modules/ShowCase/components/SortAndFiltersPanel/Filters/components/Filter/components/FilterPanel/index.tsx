import { DirectionTypes } from 'enums/flexTypes';
import { Field } from 'ui/Field';
import cx from 'classnames';
import './style.scss';
import { IFilterConfig } from '../../../../config';
import { IFilters } from 'store/reducers/Books/helpers';
import { FilterPanelItem } from './components/FilterPanelItem';
import { useState } from 'react';

interface IFilterPanel {
    item: IFilterConfig;
    panelIsOpen: boolean;
    setPanelIsOpen: any;
    filters: IFilters | null;
    setFilters: any;
}

const FilterPanel: React.FC<IFilterPanel> = ({ item, panelIsOpen, setPanelIsOpen, filters, setFilters }) => {
    const [currentRadio, setCurrentRadio] = useState<string | null>(filters ? filters[item.id] : null);
    const { id, children } = item;

    return (
        <Field 
            direction={DirectionTypes.column} 
            className={cx('filter-panel', panelIsOpen ? 'filter-panel_isActive' : 'filter-panel_isClosed')}
        >
            {children.map(child => (
                <FilterPanelItem 
                    key={id}
                    name={id}
                    item={child} 
                    filters={filters} 
                    setFilters={setFilters} 
                    currentRadio={currentRadio}
                    setCurrentRadio={setCurrentRadio}
                />
            ))}
        </Field>
    )
}

export { FilterPanel };
