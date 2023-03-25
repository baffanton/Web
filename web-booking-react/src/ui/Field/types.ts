import { AlignItemsTypes, DirectionTypes, JustifyContentTypes } from "enums/flexTypes";
import { MarginTypes, PaddingTypes } from "enums/indentTypes";

export interface IField {
    className?: string,
    direction?: DirectionTypes,
    jc?: JustifyContentTypes,
    ai?: AlignItemsTypes,
    noFlex?: boolean,
}
