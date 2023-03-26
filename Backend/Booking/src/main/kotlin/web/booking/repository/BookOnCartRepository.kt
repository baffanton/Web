package web.booking.repository

import org.springframework.data.repository.CrudRepository
import web.booking.entity.BookEntity
import web.booking.entity.BookOnCartEntity
import web.booking.entity.CartEntity

interface BookOnCartRepository : CrudRepository<BookOnCartEntity, Int> {
    // Поиск по КНИГЕ и КОРЗИНЕ
    fun findByBookAndCart(bookEntity: BookEntity, cartEntity: CartEntity): BookOnCartEntity?

    // Поиск по КОРЗИНЕ
    fun findAllByCartOrderByBook(cartEntity: CartEntity): List<BookOnCartEntity>?
}
