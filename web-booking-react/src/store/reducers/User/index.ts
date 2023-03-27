import { IUserActionTypes, IUserReducerModel, USER_CHANGE_LOCATION, USER_FETCH_CITIES } from "./types";

const initialState: IUserReducerModel = {
    city: null,
    cities: [],
};

export function userReducer(state = initialState, action: IUserActionTypes) {
    switch (action.type) {
        case USER_CHANGE_LOCATION:
            return {
                ...state,
                city: action.city,
            };
        case USER_FETCH_CITIES:
            return {
                ...state,
                cities: action.cities,
            };
        default:
            return state;
    }
}