import { AlignItemsTypes } from 'enums/flexTypes';
import { Field } from 'ui/Field';
import { FilterPanel } from './FilterPanel';
import { SortPanel } from './SortPanel';
import './style.scss';

const SortAndFiltersPanel: React.FC<any> = () => {

    return (
        <Field className='sort-filter-block' ai={AlignItemsTypes.center}>
            <SortPanel />
            <FilterPanel />
        </Field>
    )
}

export { SortAndFiltersPanel };
