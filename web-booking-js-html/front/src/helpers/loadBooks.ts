import { addToBasket } from "../actions/addToBasket";
import { bookDecrementFromOrder } from "../actions/bookDecrementFromOrder";
import { bookIncrementFromOrder } from "../actions/bookIncrementFromOrder";
import { deleteBookFromOrder } from "../actions/deleteBookFromOrder";
import { IBook, ICart } from "../interfaces";
import { getUserId } from "./user";

let basketCount = 0;
export const getBasketCount = () => {
    return basketCount;
}

export const setBasketCount = (newCount: number) => {
    const basketCountContainer = document.getElementById("basket-count");
    if (!basketCountContainer) {
        return null;
    }

    basketCount = newCount;
    basketCountContainer.textContent = String(basketCount);
}

export const loadBooksToShowCase = (configBooks: IBook[]) => {
    const showCase = document.getElementById("showcase");
    const userId = getUserId();
    if (!showCase || !userId) {
        return null;
    }

    showCase.innerHTML = "";

    configBooks.forEach((book) => {
        const { id, picture, title, author, publisher, pages, year, price } = book;

        const newCard = document.createElement("div");
        newCard.classList.add('book-card');
        newCard.innerHTML = `
            <div class="book-card__container">
                <div class="book-card__image-container">
                    <img class="book-card__image" src="${picture}" alt="">
                </div>
                <div class="book-info">
                    <p class="book-info__title">${title}</p>
                    <p class="book-info__author">${author}</p>
                    <p class="book-info__publisher">Издатель: ${publisher}</p>
                    <p class="book-info__page-count">Кол-во страниц: ${pages}</p>
                    <p class="book-info__year">Дата издания: ${year}</p>
                    <div class="book-price">
                        <div class="book-price__digit-container">
                            <p id="price" class="book-price__digit">${price}</p>
                            <i class="fa-solid fa-ruble-sign fa-sm book-price__icon"></i>
                        </div>
                        <div id="${id}__button-price" class="book-price__button">Купить</div>
                    </div>
                </div>
            </div>
        `;
      
        showCase.appendChild(newCard);

        const buttonPrice = document.getElementById(`${id}__button-price`);
        buttonPrice!.onclick = function() {
            addToBasket(id, userId);
        }
    })
}

export const loadBooksToCart = (configBooks: ICart) => {
    const cardsContainer = document.getElementsByClassName("buy-cards-container")[0];

    if (!cardsContainer) {
        return null;
    }

    cardsContainer.innerHTML = "";
    
    const { count, price, books } = configBooks;

    const titleButton = document.getElementById("order-title");
    const priceDigitMain = document.getElementById("price-digit-main");
    const priceDigitSum = document.getElementById("price-digit-sum");

    if (!titleButton || !priceDigitMain || !priceDigitSum) {
        return null;
    }

    titleButton.textContent = `Товары (${count})`;
    priceDigitMain.textContent = String(price);
    priceDigitSum.textContent = String(price);

    books.forEach(({ id, picture, title, author, price, count }) => {
        const newBuyCard = document.createElement("div");
        newBuyCard.classList.add("buy-card");
        newBuyCard.innerHTML = `
            <img class="buy-card__image" src="${picture}" />
            <div class="buy-card__more">
                <div class="buy-card__info">
                    <div class="buy-card__main">
                        <p class="buy-card__title">${title}</p>
                        <p class="buy-card__author">${author}</p>
                    </div>
                    <div class="buy-card__add">
                        <div class="change-panel">
                            <i id="${id}_minus-button" class="fa-solid fa-minus change-panel__icon"></i>
                            <p class="change-panel__count">${count}</p>
                            <i id="${id}_plus-button" class="fa-solid fa-plus change-panel__icon"></i>
                        </div>
                        <a id="${id}_delete-button" class="buy-card__delete-button">Удалить</a>
                    </div>
                </div>
                <p class="buy-card__price">${price} x ${count} Итого: ${price * count}</p>
            </div>
        `

        cardsContainer.appendChild(newBuyCard);

        const deleteButton = document.getElementById(`${id}_delete-button`);
        const minusButton = document.getElementById(`${id}_minus-button`);
        const plusButton = document.getElementById(`${id}_plus-button`);


        if (!deleteButton || !minusButton || !plusButton) {
            return null;
        }

        deleteButton.onclick = function () {
            const userId = getUserId();

            if (!userId) {
                return null;
            }
            
            deleteBookFromOrder(userId, id);
        }

        minusButton.onclick = function () {
            const userId = getUserId();

            if (!userId) {
                return null;
            }
            
            bookDecrementFromOrder(userId, id);
        }

        plusButton.onclick = function () {
            const userId = getUserId();

            if (!userId) {
                return null;
            }
            
            bookIncrementFromOrder(userId, id);
        }
    })
}