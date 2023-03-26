import { AlignItemsTypes, DirectionTypes, JustifyContentTypes } from "enums/flexTypes";

export interface IField {
    className?: string,
    direction?: DirectionTypes,
    jc?: JustifyContentTypes,
    ai?: AlignItemsTypes,
    noFlex?: boolean,
    id?: string;
}
