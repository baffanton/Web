import { faArrowRotateLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';
import { Field } from 'ui/Field';
import { SortPanel } from './SortPanel';
import './style.scss';

const SortAndFiltersPanel: React.FC<any> = () => {
    const filters = [
        {
            id: 'genre',
            title: 'Жанр',
            children: [
                {
                    id: 'comics',
                    title: 'Комиксы'
                },
                {
                    id: 'romance',
                    title: 'Романтика',
                },
                {
                    id: 'active',
                    title: 'Боевики'
                }
            ]
        },
        {
            id: 'ageContent',
            title: 'Возрастное ограничение',
            children: [
                {
                    id: 'six',
                    title: '6+'
                },
                {
                    id: 'twelve',
                    title: '12+'
                },
                {
                    id: 'eighteen',
                    title: '18+'
                }
            ]
        },
        {
            id: 'price',
            title: 'Цена',
            children: [
                {
                    id: 'min',
                    title: 'От'
                },
                {
                    id: 'max',
                    title: 'До'
                }
            ]
        }
    ]

    return (
        <Field className='sort-filter-block' ai={AlignItemsTypes.center}>
            <SortPanel />
            <Field className='filter-container' ai={AlignItemsTypes.center}>
                {filters.map(({id, title}) => {
                    return (
                        <Field 
                            ai={AlignItemsTypes.center} 
                            jc={JustifyContentTypes.center} 
                            id={String(id)} 
                            key={String(id)} 
                            className='filter'
                        >
                                <p className="filter__title">{ title }</p>
                                <FontAwesomeIcon icon={faChevronDown} className='filter__icon' />
                        </Field>
                    )
                })}
            </Field>
            <Field className='filter-button' ai={AlignItemsTypes.center}>
                <button className="filter-button__apply">Применить</button>
                <FontAwesomeIcon className='filter-button__clear' icon={faArrowRotateLeft} />
            </Field>
        </Field>
    )
}

export { SortAndFiltersPanel };
