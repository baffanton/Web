import { createStateSelector } from "../helpers";

const window = {
    modalIsOpen: createStateSelector('window.modalIsOpen'),
};

export { window };
