import { IWindowActionTypes, IWindowReducerModel, WINDOW_OPEN_MODAL } from "./types";

const initialState: IWindowReducerModel = {
    modalIsOpen: false,
};

export function windowReducer(state = initialState, action: IWindowActionTypes) {
    switch (action.type) {
        case WINDOW_OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: action.modalIsOpen,
            };
        default:
            return state;
    }
}