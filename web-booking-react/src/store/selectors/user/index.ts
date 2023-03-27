import { createStateSelector } from "../helpers";

const user = {
    city: createStateSelector('user.city'),
};

export { user };
