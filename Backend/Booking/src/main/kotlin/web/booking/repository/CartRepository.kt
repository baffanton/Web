package web.booking.repository

import org.springframework.data.repository.CrudRepository
import web.booking.entity.CartEntity

interface CartRepository : CrudRepository<CartEntity, Int> {
    fun findByName(name: String): CartEntity?
}
