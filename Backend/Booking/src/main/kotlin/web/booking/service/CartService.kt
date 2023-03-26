package web.booking.service

import web.booking.dto.CartDto
import web.booking.dto.OrderDto

interface CartService {
    fun addCart(session: String, id: Int)
    fun deleteBook(session: String, id: Int)
    fun deleteAllBook(session: String, id: Int)
    fun getCart(session: String): CartDto
    fun createOrder(orderDto: OrderDto): String
}
