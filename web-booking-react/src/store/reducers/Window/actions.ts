import { IOpenModal, WINDOW_OPEN_MODAL } from "./types";

export const openModal = (modalIsOpen: boolean) => (dispatch: (arg0: IOpenModal) => void) => {
    return dispatch({
        type: WINDOW_OPEN_MODAL,
        modalIsOpen
    })
};
