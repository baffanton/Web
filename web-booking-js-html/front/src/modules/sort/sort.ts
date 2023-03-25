import { getCurrentFilterPanel, getSortPanelClosed, setFilterPanelClosed, setSortPanelClosed } from "../..";
import { getBooks } from "../../actions/getBooks";
import { SortDirectionEnum, SortTypeEnum } from "../../enums";
import { clearFilterContainer, clearSortContainer } from "../../helpers/clearContainer";
import { getCurrentFilters } from "../filters/filters";
import { sortConfig } from "./sortConfig";

export const createSortHandlers = () => {
    const sortContainer = document.getElementById("sort-container");

    if (!sortContainer) {
        return null;
    }

    sortContainer.onclick = function (e) {
        clickSort(e, sortContainer);
    }
}

const openSortPanel = (sortContainer: HTMLElement) => {
    const items = sortConfig;
    const buttonSort = document.getElementById("sort-title");
    const sortPanel = document.createElement("div");
    sortPanel.classList.add("sort-panel");
    sortPanel.id = "sort-panel";

    items.forEach(({ title, iconContent }) => {
        const newElement = document.createElement("div");
        newElement.classList.add("sort-panel__item");
        newElement.innerHTML = `
            ${iconContent}
            <p class="sort-panel__title">${title}</p>
        `;
        newElement.onclick = function () {
            const filters = getCurrentFilters();
            buttonSort!.textContent = title;
            sortContainer.removeChild(sortPanel);
            sortContainer?.classList.remove("sort_isActive");

            switch (title) {
                case "По возрастанию цены":
                    return getBooks(filters, SortTypeEnum.price, SortDirectionEnum.ascend);
                case "По убыванию цены":
                    return getBooks(filters, SortTypeEnum.price, SortDirectionEnum.descend);
                case "От А до Я":
                    return getBooks(filters, SortTypeEnum.title, SortDirectionEnum.ascend);
                case "От Я до А":
                    return getBooks(filters, SortTypeEnum.title, SortDirectionEnum.descend);
                default:
                    return null;
            }
        }
        sortPanel.appendChild(newElement);
    })

    sortContainer.appendChild(sortPanel);
}

const clickSort = (e: any, sortContainer: HTMLElement) => {
    const targetId = e.target.id;
    const sortPanel = document.getElementById("sort-panel");
    const currentFilterPanel = getCurrentFilterPanel();
    const sortPanelClosed = getSortPanelClosed();

    if (currentFilterPanel) {
        setFilterPanelClosed(true);
        clearFilterContainer(currentFilterPanel);
    }

    if (sortPanelClosed) {
        setSortPanelClosed(false);
        sortContainer.classList.add("sort_isActive");
        openSortPanel(sortContainer);
        return;
    }
    
    if (targetId === "sort-panel") {
        return;
    }

    if (!sortPanelClosed && sortPanel) {
        clearSortContainer();
        setSortPanelClosed(true);
        return;
    }

    if (!sortPanelClosed) {
        setSortPanelClosed(true);
    }
}