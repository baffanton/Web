import { setCurrentFilterPanel } from "..";
import { FiltersEnum } from "../enums";

export const clearSortContainer = () => {
    const sortContainer = document.getElementById("sort-container");
    const sortPanel = document.getElementById("sort-panel");

    if (sortContainer && sortPanel) {
        sortContainer.classList.remove("sort_isActive");
        sortContainer.removeChild(sortPanel);
    }
}

export const clearFilterContainer = (currentFilterPanel: FiltersEnum | null): null => {
    if (!currentFilterPanel) {
        return null;
    }
    
    const filterPanel = document.getElementById("filter-panel");
    switch (currentFilterPanel) {
        case FiltersEnum.genre:
            const genreContainer = document.getElementById("filter-genre");

            if (genreContainer && filterPanel) {
                genreContainer.removeChild(filterPanel);
                genreContainer.classList.remove("filter_isActive")
            }
            break;
        case FiltersEnum.ageContent:
            const ageContentContainer = document.getElementById("filter-age-content");

            if (ageContentContainer && filterPanel) {
                ageContentContainer.removeChild(filterPanel);
                ageContentContainer.classList.remove("filter_isActive")
            }
            break;
        case FiltersEnum.price:
            const priceContainer = document.getElementById("filter-price");

            if (priceContainer && filterPanel) {
                priceContainer.removeChild(filterPanel);
                priceContainer.classList.remove("filter_isActive")
            }
            break;
        default:
            return null;
    }
    setCurrentFilterPanel(null);

    return null;
}