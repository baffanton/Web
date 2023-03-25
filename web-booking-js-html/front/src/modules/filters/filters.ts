import { 
    getCurrentFilterPanel, 
    getFilterPanelClosed, 
    setCurrentFilterPanel, 
    setFilterPanelClosed, 
    setSortPanelClosed 
} from "../..";
import { getBooks } from "../../actions/getBooks";
import { AgeContentEnum, FiltersEnum, GenreEnum, PriceEnum } from "../../enums";
import { clearFilterContainer, clearSortContainer } from "../../helpers/clearContainer";
import { IFilters } from "../../interfaces";
import { arrayGenres, arrayAgeContent, arrayPrice } from "./configBooks";

let filters: IFilters | null = null;

export const getCurrentFilters = (): IFilters | null => {
    return filters;
}

export const setCurrentFilters = (newFilters: IFilters | null) => {
    filters = newFilters;
}

export const createFilterHandlers = () => {
    const buttonApplyFilters = document.getElementById("apply-filters");
    const buttonClearFilters = document.getElementById("clear-filters");
    const buttonGenre = document.getElementById("filter-genre");
    const buttonAgeContent = document.getElementById("filter-age-content");
    const buttonPrice = document.getElementById("filter-price");

    if (!buttonAgeContent || !buttonApplyFilters || !buttonClearFilters || !buttonGenre || !buttonPrice) {
        return null;
    }

    buttonApplyFilters.onclick = function () {
        clickApplyFilters();
    }

    buttonClearFilters.onclick = function () {
        clickClearFilters();
    }

    buttonGenre.onclick = function (e) {
        clickFilter(e, buttonGenre, FiltersEnum.genre)
    }

    buttonAgeContent.onclick = function (e) {
        clickFilter(e, buttonAgeContent, FiltersEnum.ageContent)
    }

    buttonPrice.onclick = function (e) {
        clickFilter(e, buttonPrice, FiltersEnum.price)
    }
}

export const defaultFilters: IFilters = {
    genre: null,
    age: null,
    price: null,
}

const openFilterPanel = (filterType: FiltersEnum, parentElement: HTMLElement) => {
    parentElement.classList.add("filter_isActive");
    const newElement = document.createElement("div");
    newElement.classList.add("filter-panel");
    newElement.id = "filter-panel";

    switch (filterType)  {
        case FiltersEnum.genre:
            createFilterPanel(newElement, arrayGenres, "click", "second", FiltersEnum.genre);
            break;
        case FiltersEnum.ageContent:
            createFilterPanel(newElement, arrayAgeContent, "click", "second", FiltersEnum.ageContent);
            break;
        case FiltersEnum.price:
            createFilterPanel(newElement, arrayPrice, "change", "first", FiltersEnum.price);
            break;
    }

    parentElement.appendChild(newElement);

    loadApplyFilters();
}

const loadApplyFilters = () => {
    const filters = getCurrentFilters();

    if (!filters) {
        return null;
    }

    loadApplyGenres(filters);
    loadApplyAges(filters);
    loadApplyPrices(filters);
}

const loadApplyGenres = (filters: IFilters) => {
    const comics = (document.getElementById("comics") as HTMLInputElement);
    const romance = (document.getElementById("romance") as HTMLInputElement);
    const detective = (document.getElementById("detective") as HTMLInputElement);
    const action = (document.getElementById("action") as HTMLInputElement);

    if (!comics || !romance || !detective || !action) {
        return null;
    }

    if (filters.genre === GenreEnum.comics) {
        comics.checked = true;
    }
    if (filters.genre === GenreEnum.romance) {
        romance.checked = true;
    }
    if (filters.genre === GenreEnum.detective) {
        detective.checked = true;
    }
    if (filters.genre === GenreEnum.action) {
        action.checked = true;
    }

    comics.onchange = function() {
        if (comics.checked) {
            changeFilters(FiltersEnum.genre, GenreEnum.comics)
        }
    };
    romance.onchange = function() {
        if (romance.checked) {
            changeFilters(FiltersEnum.genre, GenreEnum.romance)
        }
    };
    detective.onchange = function() {
        if (detective.checked) {
            changeFilters(FiltersEnum.genre, GenreEnum.detective)
        }
    };
    action.onchange = function() {
        if (action.checked) {
            changeFilters(FiltersEnum.genre, GenreEnum.action)
        }
    };
}

const loadApplyAges = (filters: IFilters) => {
    const six = (document.getElementById("six") as HTMLInputElement);
    const twelve = (document.getElementById("twelve") as HTMLInputElement);
    const eighteen = (document.getElementById("eighteen") as HTMLInputElement);

    if (!six || !twelve || !eighteen) {
        return null;
    }

    if (filters.age === AgeContentEnum.six) {
        six.checked = true;
    }
    if (filters.age === AgeContentEnum.twelve) {
        twelve.checked = true;
    }
    if (filters.age === AgeContentEnum.eighteen) {
        eighteen.checked = true;
    }

    six.onchange = function() {
        if (six.checked) {
            changeFilters(FiltersEnum.ageContent, AgeContentEnum.six)
        }
    }
    twelve.onchange = function() {
        if (twelve.checked) {
            changeFilters(FiltersEnum.ageContent, AgeContentEnum.twelve)
        }
    }
    eighteen.onchange = function() {
        if (eighteen.checked) {
            changeFilters(FiltersEnum.ageContent, AgeContentEnum.eighteen)
        }
    }
}

const loadApplyPrices = (filters: IFilters) => {
    const priceMin = (document.getElementById("price-min") as HTMLInputElement);
    const priceMax = (document.getElementById("price-max") as HTMLInputElement);

    if (!priceMin || !priceMax) {
        return null;
    }

    if (filters.price?.min) {
        priceMin.value = String(filters.price.min)
    }
    if (filters.price?.max) {
        priceMax.value = String(filters.price.max)
    }

    priceMin.onchange = function() {
        if (priceMin.value) {
            changeFilters(FiltersEnum.price, PriceEnum.min, Number(priceMin.value))
        }
    }
    priceMax.onchange = function() {
        if (priceMax.value) {
            changeFilters(FiltersEnum.price, PriceEnum.max, Number(priceMax.value))
        }
    }
}

const clickApplyFilters = () => {
    const sortPanel = document.getElementById("sort-panel");
    const currentFilterPanel = getCurrentFilterPanel();
    const filters = getCurrentFilters();
    
    if (sortPanel) {
        clearSortContainer();
    }

    if (currentFilterPanel) {
        setFilterPanelClosed(true);
        clearFilterContainer(currentFilterPanel);
    }

    getBooks(filters);
}

const clickClearFilters = () => {
    const sortPanel = document.getElementById("sort-panel");
    const currentFilterPanel = getCurrentFilterPanel();

    if (sortPanel) {
        setSortPanelClosed(true);
        clearSortContainer();
    }

    if (currentFilterPanel) {
        setFilterPanelClosed(true);
        clearFilterContainer(currentFilterPanel);
    }

    setCurrentFilters(defaultFilters);
    getBooks();
}

const clickFilter = (e: any, parentElement: HTMLElement, filterType: FiltersEnum) => {
    const sortPanel = document.getElementById("sort-panel");
    const filterPanel = document.getElementById("filter-panel");
    const targetId = e.target.id;
    const targetClasses = e.target.className.split(" ");
    const filterPanelClosed = getFilterPanelClosed();
    const currentFilterPanel = getCurrentFilterPanel();

    if (sortPanel) {
        setSortPanelClosed(true);
        clearSortContainer();
    }

    if (filterPanelClosed || !filterPanelClosed && currentFilterPanel !== filterType) {
        clearFilterContainer(currentFilterPanel);
        setCurrentFilterPanel(filterType);
        if (filterPanelClosed) {
            setFilterPanelClosed(false);
        }

        return openFilterPanel(filterType, parentElement);
    }

    if (targetId === "filter-panel" || 
        targetClasses.includes("filter-panel__item") ||
        targetClasses.includes("filter-panel__label") ||
        targetClasses.includes("filter-panel__input")) {
        return;
    }

    if (!filterPanelClosed && filterPanel) {
        clearFilterContainer(currentFilterPanel);
        setFilterPanelClosed(false);
        return;
    }

    if (!filterPanelClosed) {
        setFilterPanelClosed(true);
    }
}

const changeFilters = (filterType: FiltersEnum, filter: GenreEnum | AgeContentEnum | PriceEnum, value?: number) => {
    const filters = getCurrentFilters();
    let newFilters: IFilters | null;
    if (value) {
        newFilters = { ...filters, [filterType]: { ...filters?.price, [filter]: value }}
        setCurrentFilters(newFilters);
        return;
    }

    newFilters = { ...filters, [filterType]: filter }
    setCurrentFilters(newFilters);
}

const createFilterPanel = (parentElement: HTMLElement, config: any[], onClickFunction: any, labelPosition: any, filterType: FiltersEnum) => {
    config.forEach(({ title, id, type, name }) => {
        const newFilterPanelItem = document.createElement("div");
        newFilterPanelItem.classList.add("filter-panel__item");
        if (filterType === FiltersEnum.price) {
            newFilterPanelItem.classList.add("filter-panel__item_isPrice");
        }

        const newChildInput = document.createElement("input");
        newChildInput.classList.add("filter-panel__input");
        if (filterType === FiltersEnum.price) {
            newChildInput.classList.add("filter-panel__input_isPrice");
        }
        newChildInput.type = type;

        if (name) {
            newChildInput.name = name;
        }
        
        newChildInput.id = id;

        const newChildLabel = document.createElement("label");
        newChildLabel.classList.add("filter-panel__label");
        if (filterType === FiltersEnum.price) {
            newChildLabel.classList.add("filter-panel__label_isPrice");
        }
        newChildLabel.setAttribute("for", id);
        newChildLabel.textContent = title;

        if (labelPosition === "first") {
            newFilterPanelItem.appendChild(newChildLabel);
            newFilterPanelItem.appendChild(newChildInput);
        }
        else {
            newFilterPanelItem.appendChild(newChildInput);
            newFilterPanelItem.appendChild(newChildLabel);
        }

        if (onClickFunction === "click") {
            newFilterPanelItem.onclick = function () {
                newChildInput.click();
                switch (newChildInput.id) {
                    case "comics":
                        return changeFilters(filterType, GenreEnum.comics);
                    case "romance":
                        return changeFilters(filterType, GenreEnum.romance);
                    case "detective":
                        return changeFilters(filterType, GenreEnum.detective);
                    case "action":
                        return changeFilters(filterType, GenreEnum.action);
                    case "six":
                        return changeFilters(filterType, AgeContentEnum.six);
                    case "twelve":
                        return changeFilters(filterType, AgeContentEnum.twelve);
                    case "eighteen":
                        return changeFilters(filterType, AgeContentEnum.eighteen);
                    default:
                        return null;
                }
            }
        }

        if (onClickFunction === "change") {
            newChildInput.onchange = function (e: any) {
                const targetValue = e.target.value;

                if (newChildInput.id === "price-min") {
                    return changeFilters(filterType, PriceEnum.min, targetValue);
                }

                return changeFilters(filterType, PriceEnum.max, targetValue);
            }
        }

        parentElement.appendChild(newFilterPanelItem);
    });
}