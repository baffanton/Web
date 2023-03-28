import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes, DirectionTypes, JustifyContentTypes } from 'enums/flexTypes';
import { useEffect, useState } from 'react';
import { Field } from 'ui/Field';
import cx from 'classnames';
import './style.scss';
import { IFilters } from 'store/reducers/Books/helpers';

const Filter:React.FC<{
    item: {
        id: string;
        title: string;
        children: any[];
    },
    currentPanel: any,
    setCurrentPanel: any,
    filters: IFilters | null,
    setFilters: any
}> = ({item, currentPanel, setCurrentPanel, filters, setFilters}) => {
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

    const { id, title, children } = item;
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
                <Field direction={DirectionTypes.column} className={cx('filter-panel', filterPanelIsOpened ? 'filter-panel_isActive' : 'filter-panel_isClosed')}>
                    {
                        children.map(({id, title, type, inputPosition}) => {
                            if (inputPosition === 'first') {
                                return (
                                    <Field ai={AlignItemsTypes.center} className='filter-panel__item' key={id} onClick={() => {
                                        const newFilters = { ...filters, [item.id]: id };
                                        return setFilters(newFilters);
                                    }}>
                                        <input className='filter-panel__input' id={id} type={type} name={item.id} />
                                        <label className='filter-panel__label' htmlFor={id}>{title}</label>
                                    </Field>
                                )
                            }
                            return (
                                <Field direction={DirectionTypes.column} className='filter-panel__item' key={id}>
                                    <label className='filter-panel__label' htmlFor={id}>{title}</label>
                                    <input 
                                        onChange={e => {
                                            const newFilters = { ...filters, [item.id]: { ...filters?.price, [id]: e.target.value }}
                                            return setFilters(newFilters);
                                        }} 
                                        className='filter-panel__input' 
                                        id={id} 
                                        type={type} 
                                    />
                                </Field>
                            )
                        })
                    }
                </Field>
        </Field>
    )
}

export { Filter };
