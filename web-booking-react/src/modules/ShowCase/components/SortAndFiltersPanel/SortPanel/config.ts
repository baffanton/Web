import { 
    faArrowDownAZ,
    faArrowDownShortWide, 
    faArrowDownWideShort, 
    faArrowDownZA,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { SortDirectionEnum, SortTypeEnum } from "enums/sortTypes";

export interface ISortConfig {
    id: string;
    type: SortTypeEnum;
    direction: SortDirectionEnum;
    title: string;
    icon: IconDefinition
}

export const defaultSortConfig = {
    id: 'titleAsc',
    type: SortTypeEnum.title,
    direction: SortDirectionEnum.asc,
    title: 'От А до Я',
    icon: faArrowDownAZ
}

export const sortConfig: ISortConfig[] = [
    {
        id: 'titleAsc',
        type: SortTypeEnum.title,
        direction: SortDirectionEnum.asc,
        title: 'От А до Я',
        icon: faArrowDownAZ
    },
    {
        id: 'titleDesc',
        type: SortTypeEnum.title,
        direction: SortDirectionEnum.desc,
        title: 'От Я до А',
        icon: faArrowDownZA
    },
    {
        id: 'priceAsc',
        type: SortTypeEnum.price,
        direction: SortDirectionEnum.asc,
        title: 'По возрастанию цены',
        icon: faArrowDownShortWide
    },
    {
        id: 'priceDesc',
        type: SortTypeEnum.price,
        direction: SortDirectionEnum.desc,
        title: 'По уменьшению цены',
        icon: faArrowDownWideShort
    }
]