import { ICloseModal, IOpenModal, MODAL_CLOSE, MODAL_OPEN } from "./types"

export const openModal = () => (dispatch: (arg0: IOpenModal) => void) => {
    dispatch({
        type: MODAL_OPEN,
        isOpened: true,
    })
}

export const closeModal = () => (dispatch: (arg0: ICloseModal) => void) => {
    dispatch({
        type: MODAL_CLOSE,
        isOpened: false,
    })
}