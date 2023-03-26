import { DirectionTypes } from 'enums/flexTypes';
import React from 'react';
import { Field } from 'ui/Field';
import { FiltersPanel } from './components/FiltersPanel';
import { ShowCasePanel } from './components/ShowCasePanel';
import './style.scss'

interface IShowCase {
};

const ShowCase: React.FC<IShowCase> = () => {
    const config = [
        {
            "id":4,
            "picture":"https://cdn.img-gorod.ru/310x500/nomenclature/29/206/2920688.jpg",
            "title":"Все в его поцелуе",
            "author":"Джулия Куин",
            "publisher":"АСТ",
            "pages":320,
            "year":"2023",
            "age":16,
            "price":450,
            "genre":"Романтика"
        },
        {
            "id":5,
            "picture":"https://cdn.img-gorod.ru/310x500/nomenclature/29/638/2963845.jpg",
            "title":"Гибельное влияние",
            "author":"Майк Омер",
            "publisher":"INSPIRIA",
            "pages":416,
            "year":"2023",
            "age":16,
            "price":690,
            "genre":"Боевик"
        },
        {
            "id":1,
            "picture":"https://cdn.img-gorod.ru/1202x699/nomenclature/29/572/2957262.jpg",
            "title":"Колокол",
            "author":"Лора Кейли",
            "publisher":"Эксмо",
            "pages":384,
            "year":"2023",
            "age":16,
            "price":558,
            "genre":"Детектив"
        },
        {
            "id":3,
            "picture":"https://cdn.img-gorod.ru/1202x699/nomenclature/29/547/2954787.jpg",
            "title":"Основатель Тёмного Пути. Том 2",
            "author":"Мосян Тунсю",
            "publisher":"Эксмо",
            "pages":216,
            "year":"2022",
            "age":16,
            "price":1050,
            "genre":"Комиксы"
        },
        {
            "id":2,
            "picture":"https://cdn.img-gorod.ru/310x500/nomenclature/29/448/2944827.jpg",
            "title":"Человек-бензопила. Книга 6. Вперед",
            "author":"Тацуки Фудзимото",
            "publisher":"Азбука",
            "pages":192,
            "year":"2022",
            "age":18,
            "price":633,
            "genre":"Комиксы"
        }
    ];

    return (
        <Field className='main' direction={DirectionTypes.column}>
            <FiltersPanel></FiltersPanel>
            <ShowCasePanel books={config}></ShowCasePanel>
        </Field>
            
    );
}

export { ShowCase };
