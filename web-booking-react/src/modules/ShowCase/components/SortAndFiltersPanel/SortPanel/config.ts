import { 
    faArrowDownAZ,
    faArrowDownShortWide, 
    faArrowDownWideShort, 
    faArrowDownZA
} from "@fortawesome/free-solid-svg-icons";

export const sortConfig = [
    {
        id: 'titleAsc',
        title: 'От А до Я',
        icon: faArrowDownAZ
    },
    {
        id: 'titleDesc',
        title: 'От Я до А',
        icon: faArrowDownZA
    },
    {
        id: 'priceAsc',
        title: 'По возрастанию цены',
        icon: faArrowDownShortWide
    },
    {
        id: 'priceDesc',
        title: 'По уменьшению цены',
        icon: faArrowDownWideShort
    }
]