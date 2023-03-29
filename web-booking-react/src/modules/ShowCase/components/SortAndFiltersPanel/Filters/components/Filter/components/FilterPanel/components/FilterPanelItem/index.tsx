import { AlignItemsTypes, DirectionTypes } from 'enums/flexTypes';
import { InputPositionEnum, InputTypeEnum } from 'enums/inputTypes';
import { useState } from 'react';
import { IFilters } from 'store/reducers/Books/helpers';
import { Field } from 'ui/Field';
import { Radio } from 'ui/Radio';
import './style.scss';

interface IFilterPanelItem {
    item: {
        id: string;
        title: string;
        type: InputTypeEnum;
        inputPosition: InputPositionEnum;
    }
    filters: IFilters | null;
    setFilters: any;
    name: string;
    currentRadio: string | null;
    setCurrentRadio: any;
}

const FilterPanelItem: React.FC<IFilterPanelItem> = ({ 
    item, 
    filters, 
    setFilters,
    name,
    currentRadio,
    setCurrentRadio
 }) => {
    const { id, title, type, inputPosition } = item;

    const onClickHandler = (id: string) => {
        const newFilters = { ...filters, [item.id]: id };
        setFilters(newFilters);
        setCurrentRadio(id);
    }

    const onChangeHandler = (e: any) => {
        const newFilters = { ...filters, [item.id]: { ...filters?.price, [id]: e.target.value }}
        return setFilters(newFilters);
    }
    
    return (
        <Field ai={AlignItemsTypes.center} className='filter-panel__item' key={id} onClick={() => onClickHandler(id)}>
            <Radio 
                name={name}
                id={id} 
                label={title} 
                inputType={type} 
                inputPosition={inputPosition}
                labelClassNames='filter-panel__label'
                inputClassNames='filter-panel__input'
                checked={currentRadio === id}
                handlerChange={onChangeHandler}
                handlerClick={(e: any) => e.stopPropagation()}
            />
        </Field>
    )
}

export { FilterPanelItem };
