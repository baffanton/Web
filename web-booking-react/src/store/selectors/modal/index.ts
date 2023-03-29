import { createStateSelector } from "../helpers";

const modal = {
    isOpened: createStateSelector('modal.isOpened'),
};

export { modal };
