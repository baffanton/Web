import { InputPositionEnum, InputTypeEnum } from "enums/inputTypes";

export interface IFilterConfig {
    id: string;
    title: string;
    children: {
        id: string;
        title: string;
        type: InputTypeEnum;
        inputPosition: InputPositionEnum;
    }[]
}

export const filtersConfig: IFilterConfig[] = [
    {
        id: 'genre',
        title: 'Жанр',
        children: [
            {
                id: 'Комиксы',
                title: 'Комиксы',
                type: InputTypeEnum.radio,
                inputPosition: InputPositionEnum.first
            },
            {
                id: 'Романтика',
                title: 'Романтика',
                type: InputTypeEnum.radio,
                inputPosition: InputPositionEnum.first
            },
            {
                id: 'Боевики',
                title: 'Боевики',
                type: InputTypeEnum.radio,
                inputPosition: InputPositionEnum.first
            }
        ]
    },
    {
        id: 'age',
        title: 'Возраст',
        children: [
            {
                id: '6',
                title: '6+',
                type: InputTypeEnum.radio,
                inputPosition: InputPositionEnum.first
            },
            {
                id: '12',
                title: '12+',
                type: InputTypeEnum.radio,
                inputPosition: InputPositionEnum.first
            },
            {
                id: '18',
                title: '18+',
                type: InputTypeEnum.radio,
                inputPosition: InputPositionEnum.first
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
                type: InputTypeEnum.text,
                inputPosition: InputPositionEnum.second
            },
            {
                id: 'max',
                title: 'До:',
                type: InputTypeEnum.text,
                inputPosition: InputPositionEnum.second
            }
        ]
    }
]