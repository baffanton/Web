export const MODAL_OPEN = 'MODAL/OPEN';
export const MODAL_CLOSE = 'MODAL/CLOSE';

export interface IOpenModal {
    type: typeof MODAL_OPEN,
    isOpened: boolean,
}

export interface ICloseModal { 
    type: typeof MODAL_CLOSE,
    isOpened: boolean;
}

export interface IModalReducerModel {
    readonly isOpened: boolean;
}

export type IModalActionTypes =
    | IOpenModal
    | ICloseModal;