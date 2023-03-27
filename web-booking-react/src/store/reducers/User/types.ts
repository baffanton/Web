import { ICity } from "./helpers";

export const USER_CHANGE_LOCATION = 'USER/CHANGE_LOCATION';
export const USER_FETCH_CITIES = 'USER/FETCH_CITIES';

export interface IChangeLocation {
    type: typeof USER_CHANGE_LOCATION;
    city: string | null;
}

export interface IFetchCities {
    type: typeof USER_FETCH_CITIES,
    cities: ICity[];
}

export interface IUserReducerModel {
    readonly city: string | null;
    readonly cities: ICity[];
}

export type IUserActionTypes =
    | IChangeLocation
    | IFetchCities;