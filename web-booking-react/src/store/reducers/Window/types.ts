export const WINDOW_OPEN_MODAL = 'WINDOW/OPEN_MODAL';

export interface IOpenModal {
    type: typeof WINDOW_OPEN_MODAL;
    modalIsOpen: boolean;
}

export interface IWindowReducerModel {
    readonly modalIsOpen: boolean;
}

export type IWindowActionTypes =
    | IOpenModal;