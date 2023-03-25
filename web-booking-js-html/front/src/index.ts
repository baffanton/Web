import { getBooks } from "./actions/getBooks";
import { getSettings } from "./actions/getSettings";
import { FiltersEnum } from "./enums";
import { createFilterHandlers } from "./modules/filters/filters";
import { createSortHandlers } from "./modules/sort/sort";
import { createCityHandlers } from "./modules/user-city/user-city";

const loadMainPage = () => {
    getSettings();
    getBooks();
    createCityHandlers();
    createFilterHandlers();
    createSortHandlers();
}

document.addEventListener("DOMContentLoaded", loadMainPage, { once: true })

let filterPanelClosed: boolean = true;
let sortPanelClosed: boolean = true;
let currentFilterPanel: FiltersEnum | null = null;

export const setFilterPanelClosed = (newValue: boolean) => {
    filterPanelClosed = newValue;
}

export const getFilterPanelClosed = () => {
    return filterPanelClosed;
}

export const setSortPanelClosed = (newValue: boolean) => {
    sortPanelClosed = newValue;
}

export const getSortPanelClosed = () => {
    return sortPanelClosed;
}

export const setCurrentFilterPanel = (newValue: FiltersEnum | null) => {
    currentFilterPanel = newValue;
}

export const getCurrentFilterPanel = () => {
    return currentFilterPanel;
}