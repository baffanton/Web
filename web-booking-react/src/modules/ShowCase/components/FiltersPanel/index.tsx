import { faArrowRotateLeft, faChevronDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';
import { Field } from 'ui/Field';
import './style.scss';

const FiltersPanel: React.FC<any> = () => {
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

    // const sort = [
    //     {
    //         id: 'titleAsc',
    //         title: 'От А до Я'
    //     },
    //     {
    //         id: 'titleDesc',
    //         title: 'От Я до А'
    //     },
    //     {
    //         id: 'priceAsc',
    //         title: 'По возрастанию цены'
    //     },
    //     {
    //         id: 'priceDesc',
    //         title: 'По уменьшению цены'
    //     }
    // ]

    return (
        <Field className='sort-filter-block' ai={AlignItemsTypes.center}>
            <Field className='sort' ai={AlignItemsTypes.center}>
                <FontAwesomeIcon icon={faSort} className='sort__icon' />
                <p className="sort__title">От А до Я</p>
            </Field>
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

export { FiltersPanel };
