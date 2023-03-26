package web.booking.repository

import org.springframework.data.repository.CrudRepository
import web.booking.entity.BookEntity
import web.booking.model.AgeOnly
import web.booking.model.GenreOnly

interface BookRepository : CrudRepository<BookEntity, Int> {
    // Поиск ЖАНРОВ и ВОЗРАСТОВ
    fun findDistinctByOrderByGenre(): List<GenreOnly>
    fun findDistinctByOrderByAge(): List<AgeOnly>

    // Поиск с СОРТИРОВКОЙ БЕЗ ФИЛЬТРОВ
    fun findAllByOrderByTitle(): List<BookEntity>
    fun findAllByOrderByTitleDesc(): List<BookEntity>
    fun findAllByOrderByPrice(): List<BookEntity>
    fun findAllByOrderByPriceDesc(): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ЖАНР
    fun findAllByGenreOrderByTitle(genre: String): List<BookEntity>
    fun findAllByGenreOrderByTitleDesc(genre: String): List<BookEntity>
    fun findAllByGenreOrderByPrice(genre: String): List<BookEntity>
    fun findAllByGenreOrderByPriceDesc(genre: String): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ВОЗРАСТ
    fun findAllByAgeOrderByTitle(age: Int): List<BookEntity>
    fun findAllByAgeOrderByTitleDesc(age: Int): List<BookEntity>
    fun findAllByAgeOrderByPrice(age: Int): List<BookEntity>
    fun findAllByAgeOrderByPriceDesc(age: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: БОЛЬШЕ СТОИМОСТИ
    fun findAllByPriceGreaterThanEqualOrderByTitle(price: Int): List<BookEntity>
    fun findAllByPriceGreaterThanEqualOrderByTitleDesc(price: Int): List<BookEntity>
    fun findAllByPriceGreaterThanEqualOrderByPrice(price: Int): List<BookEntity>
    fun findAllByPriceGreaterThanEqualOrderByPriceDesc(price: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: МЕНЬШЕ СТОИМОСТИ
    fun findAllByPriceLessThanEqualOrderByTitle(price: Int): List<BookEntity>
    fun findAllByPriceLessThanEqualOrderByTitleDesc(price: Int): List<BookEntity>
    fun findAllByPriceLessThanEqualOrderByPrice(price: Int): List<BookEntity>
    fun findAllByPriceLessThanEqualOrderByPriceDesc(price: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: В ПРОМЕЖУТКЕ СТОИМОСТИ
    fun findAllByPriceBetweenOrderByTitle(price1: Int, price2: Int): List<BookEntity>
    fun findAllByPriceBetweenOrderByTitleDesc(price1: Int, price2: Int): List<BookEntity>
    fun findAllByPriceBetweenOrderByPrice(price1: Int, price2: Int): List<BookEntity>
    fun findAllByPriceBetweenOrderByPriceDesc(price1: Int, price2: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ЖАНР и ВОЗРАСТ
    fun findAllByGenreAndAgeOrderByTitle(genre: String, age: Int): List<BookEntity>
    fun findAllByGenreAndAgeOrderByTitleDesc(genre: String, age: Int): List<BookEntity>
    fun findAllByGenreAndAgeOrderByPrice(genre: String, age: Int): List<BookEntity>
    fun findAllByGenreAndAgeOrderByPriceDesc(genre: String, age: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ЖАНР и БОЛЬШЕ СТОИМОСТИ
    fun findAllByGenreAndPriceGreaterThanEqualOrderByTitle(genre: String, price: Int): List<BookEntity>
    fun findAllByGenreAndPriceGreaterThanEqualOrderByTitleDesc(genre: String, price: Int): List<BookEntity>
    fun findAllByGenreAndPriceGreaterThanEqualOrderByPrice(genre: String, price: Int): List<BookEntity>
    fun findAllByGenreAndPriceGreaterThanEqualOrderByPriceDesc(genre: String, price: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ЖАНР и МЕНЬШЕ СТОИМОСТИ
    fun findAllByGenreAndPriceLessThanEqualOrderByTitle(genre: String, price: Int): List<BookEntity>
    fun findAllByGenreAndPriceLessThanEqualOrderByTitleDesc(genre: String, price: Int): List<BookEntity>
    fun findAllByGenreAndPriceLessThanEqualOrderByPrice(genre: String, price: Int): List<BookEntity>
    fun findAllByGenreAndPriceLessThanEqualOrderByPriceDesc(genre: String, price: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ЖАНР и В ПРОМЕЖУТКЕ СТОИМОСТИ
    fun findAllByGenreAndPriceBetweenOrderByTitle(genre: String, price1: Int, price2: Int): List<BookEntity>
    fun findAllByGenreAndPriceBetweenOrderByTitleDesc(genre: String, price1: Int, price2: Int): List<BookEntity>
    fun findAllByGenreAndPriceBetweenOrderByPrice(genre: String, price1: Int, price2: Int): List<BookEntity>
    fun findAllByGenreAndPriceBetweenOrderByPriceDesc(genre: String, price1: Int, price2: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ВОЗРАСТ и БОЛЬШЕ СТОИМОСТИ
    fun findAllByAgeAndPriceGreaterThanEqualOrderByTitle(age: Int, price: Int): List<BookEntity>
    fun findAllByAgeAndPriceGreaterThanEqualOrderByTitleDesc(age: Int, price: Int): List<BookEntity>
    fun findAllByAgeAndPriceGreaterThanEqualOrderByPrice(age: Int, price: Int): List<BookEntity>
    fun findAllByAgeAndPriceGreaterThanEqualOrderByPriceDesc(age: Int, price: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ВОЗРАСТ и МЕНЬШЕ СТОИМОСТИ
    fun findAllByAgeAndPriceLessThanEqualOrderByTitle(age: Int, price: Int): List<BookEntity>
    fun findAllByAgeAndPriceLessThanEqualOrderByTitleDesc(age: Int, price: Int): List<BookEntity>
    fun findAllByAgeAndPriceLessThanEqualOrderByPrice(age: Int, price: Int): List<BookEntity>
    fun findAllByAgeAndPriceLessThanEqualOrderByPriceDesc(age: Int, price: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ВОЗРАСТ и В ПРОМЕЖУТКЕ СТОИМОСТИ
    fun findAllByAgeAndPriceBetweenOrderByTitle(age: Int, price1: Int, price2: Int): List<BookEntity>
    fun findAllByAgeAndPriceBetweenOrderByTitleDesc(age: Int, price1: Int, price2: Int): List<BookEntity>
    fun findAllByAgeAndPriceBetweenOrderByPrice(age: Int, price1: Int, price2: Int): List<BookEntity>
    fun findAllByAgeAndPriceBetweenOrderByPriceDesc(age: Int, price1: Int, price2: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ЖАНР и ВОЗРАСТ и БОЛЬШЕ СТОИМОСТИ
    fun findAllByGenreAndAgeAndPriceGreaterThanEqualOrderByTitle(genre: String, age: Int, price: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceGreaterThanEqualOrderByTitleDesc(genre: String, age: Int, price: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceGreaterThanEqualOrderByPrice(genre: String, age: Int, price: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceGreaterThanEqualOrderByPriceDesc(genre: String, age: Int, price: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ЖАНР и ВОЗРАСТ и МЕНЬШЕ СТОИМОСТИ
    fun findAllByGenreAndAgeAndPriceLessThanEqualOrderByTitle(genre: String, age: Int, price: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceLessThanEqualOrderByTitleDesc(genre: String, age: Int, price: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceLessThanEqualOrderByPrice(genre: String, age: Int, price: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceLessThanEqualOrderByPriceDesc(genre: String, age: Int, price: Int): List<BookEntity>

    // Поиск с СОРТИРОВКОЙ с ФИЛЬТРАМИ: ЖАНР и ВОЗРАСТ и В ПРОМЕЖУТКЕ СТОИМОСТИ
    fun findAllByGenreAndAgeAndPriceBetweenOrderByTitle(genre: String, age: Int, price1: Int, price2: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceBetweenOrderByTitleDesc(genre: String, age: Int, price1: Int, price2: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceBetweenOrderByPrice(genre: String, age: Int, price1: Int, price2: Int): List<BookEntity>
    fun findAllByGenreAndAgeAndPriceBetweenOrderByPriceDesc(genre: String, age: Int, price1: Int, price2: Int): List<BookEntity>
}
