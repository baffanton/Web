package web.booking.service

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpSession
import web.booking.dto.CartDto
import web.booking.dto.OrderDto

interface CartService {
    fun addCart(session: HttpSession, id: Int): Int
    fun deleteBook(session: HttpSession, id: Int): Int
    fun deleteAllBook(session: HttpSession, id: Int)
    fun getCart(session: HttpSession): CartDto
    fun createOrder(request: HttpServletRequest, orderDto: OrderDto)
}
