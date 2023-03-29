import { IChangeLocation, IFetchCities, USER_CHANGE_LOCATION, USER_FETCH_CITIES } from "./types";

export const changeLocation = (city: string) => (dispatch: (arg0: IChangeLocation) => void) => {
    return dispatch({
        type: USER_CHANGE_LOCATION,
        city
    })
};

export const fetchCities = () => (dispatch: (arg0: IFetchCities) => void) => {
    const config = [
        {
          "value": "Москва",
          "label": "Москва"
        },
        {
          "value": "Абрамцево",
          "label": "Абрамцево"
        },
        {
          "value": "Алабино",
          "label": "Алабино"
        },
        {
          "value": "Апрелевка",
          "label": "Апрелевка"
        },
        {
          "value": "Архангельское",
          "label": "Архангельское"
        },
        {
          "value": "Ашитково",
          "label": "Ашитково"
        },
        {
          "value": "Бакшеево",
          "label": "Бакшеево"
        },
        {
          "value": "Балашиха",
          "label": "Балашиха"
        },
        {
          "value": "Барыбино",
          "label": "Барыбино"
        },
        {
          "value": "Белозёрский",
          "label": "Белозёрский"
        },
        {
          "value": "Белоомут",
          "label": "Белоомут"
        },
        {
          "value": "Белые Столбы",
          "label": "Белые Столбы"
        },
        {
          "value": "Бородино (Московская обл.)",
          "label": "Бородино (Московская обл.)"
        },
        {
          "value": "Бронницы",
          "label": "Бронницы"
        },
        {
          "value": "Быково (Московская обл.)",
          "label": "Быково (Московская обл.)"
        },
        {
          "value": "Валуево",
          "label": "Валуево"
        },
        {
          "value": "Вербилки",
          "label": "Вербилки"
        },
        {
          "value": "Верея",
          "label": "Верея"
        },
        {
          "value": "Видное",
          "label": "Видное"
        },
        {
          "value": "Внуково",
          "label": "Внуково"
        },
        {
          "value": "Вождь Пролетариата",
          "label": "Вождь Пролетариата"
        },
        {
          "value": "Волоколамск",
          "label": "Волоколамск"
        },
        {
          "value": "Вороново",
          "label": "Вороново"
        },
        {
          "value": "Воскресенск",
          "label": "Воскресенск"
        },
        {
          "value": "Восточный",
          "label": "Восточный"
        },
        {
          "value": "Востряково",
          "label": "Востряково"
        },
        {
          "value": "Высоковск",
          "label": "Высоковск"
        },
        {
          "value": "Голицыно (Московская обл.)",
          "label": "Голицыно (Московская обл.)"
        },
        {
          "value": "Деденево",
          "label": "Деденево"
        },
        {
          "value": "Дедовск",
          "label": "Дедовск"
        },
        {
          "value": "Дзержинский",
          "label": "Дзержинский"
        },
        {
          "value": "Дмитров",
          "label": "Дмитров"
        },
        {
          "value": "Долгопрудный",
          "label": "Долгопрудный"
        },
        {
          "value": "Домодедово",
          "label": "Домодедово"
        },
        {
          "value": "Дорохово",
          "label": "Дорохово"
        },
        {
          "value": "Дрезна",
          "label": "Дрезна"
        },
        {
          "value": "Дубки",
          "label": "Дубки"
        },
        {
          "value": "Дубна",
          "label": "Дубна"
        },
        {
          "value": "Егорьевск",
          "label": "Егорьевск"
        },
        {
          "value": "Железнодорожный (Московск.)",
          "label": "Железнодорожный (Московск.)"
        },
        {
          "value": "Жилево",
          "label": "Жилево"
        },
        {
          "value": "Жуковка",
          "label": "Жуковка"
        },
        {
          "value": "Жуковский",
          "label": "Жуковский"
        },
        {
          "value": "Загорск",
          "label": "Загорск"
        },
        {
          "value": "Загорянский",
          "label": "Загорянский"
        },
        {
          "value": "Запрудная",
          "label": "Запрудная"
        },
        {
          "value": "Зарайск",
          "label": "Зарайск"
        },
        {
          "value": "Звенигород",
          "label": "Звенигород"
        },
        {
          "value": "Зеленоград",
          "label": "Зеленоград"
        },
        {
          "value": "Ивантеевка (Московская обл.)",
          "label": "Ивантеевка (Московская обл.)"
        },
        {
          "value": "Икша",
          "label": "Икша"
        },
        {
          "value": "Ильинский (Московская обл.)",
          "label": "Ильинский (Московская обл.)"
        },
        {
          "value": "Истра",
          "label": "Истра"
        },
        {
            "value": 'perm',
            "label": 'Пермь'
        },
        {
            "value": 'kazan',
            "label": 'Казань'
        },
        {
            "value": 'krasnodar',
            "label": 'Краснодар'
        },
        {
            "value": 'saint-petersburg',
            "label": 'Санкт-Петербург'
        },
        {
            "value": 'novosibirsk',
            "label": 'Новосибирск'
        },
        {
            "value": 'nizhniynovgorod',
            "label": 'Нижний Новгород'
        },
        {
            "value": 'samara',
            "label": 'Самара'
        },
        {
            "value": 'omsk',
            "label": 'Омск'
        },
        {
            "value": 'ufa',
            "label": 'Уфа'
        },
    ]

    return dispatch({
        type: USER_FETCH_CITIES,
        cities: config
    })
}
