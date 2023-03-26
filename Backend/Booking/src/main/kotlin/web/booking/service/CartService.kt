package web.booking.service

import web.booking.dto.CartDto
import web.booking.dto.OrderDto

interface CartService {
    fun addCart(id: Int)
    fun deleteBook(id: Int)
    fun deleteAllBook(id: Int)
    fun getCart(): CartDto
    fun createOrder(orderDto: OrderDto)
}
