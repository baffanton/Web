export const filtersConfig = [
    {
        id: 'genre',
        title: 'Жанр',
        children: [
            {
                id: 'comics',
                title: 'Комиксы',
                type: 'radio',
                inputPosition: 'first'
            },
            {
                id: 'romance',
                title: 'Романтика',
                type: 'radio',
                inputPosition: 'first'
            },
            {
                id: 'active',
                title: 'Боевики',
                type: 'radio',
                inputPosition: 'first'
            }
        ]
    },
    {
        id: 'ageContent',
        title: 'Возрастное ограничение',
        children: [
            {
                id: 'six',
                title: '6+',
                type: 'radio',
                inputPosition: 'first'
            },
            {
                id: 'twelve',
                title: '12+',
                type: 'radio',
                inputPosition: 'first'
            },
            {
                id: 'eighteen',
                title: '18+',
                type: 'radio',
                inputPosition: 'first'
            }
        ]
    },
    {
        id: 'price',
        title: 'Цена',
        children: [
            {
                id: 'min',
                title: 'От:',
                type: 'text',
                inputPosition: 'second'
            },
            {
                id: 'max',
                title: 'До:',
                type: 'text',
                inputPosition: 'second'
            }
        ]
    }
]