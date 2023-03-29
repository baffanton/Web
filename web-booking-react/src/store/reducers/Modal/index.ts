import { IModalActionTypes, IModalReducerModel, MODAL_CLOSE, MODAL_OPEN } from "./types";

const initialState: IModalReducerModel = {
    isOpened: false,
};

export function modalReducer(state = initialState, action: IModalActionTypes) {
    switch (action.type) {
        case MODAL_OPEN:
        case MODAL_CLOSE:
            return {
                ...state,
                isOpened: action.isOpened
            };
        default:
            return state;
    }
}