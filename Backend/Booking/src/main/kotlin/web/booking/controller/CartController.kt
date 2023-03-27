package web.booking.controller

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpSession
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import web.booking.dto.CartDto
import web.booking.dto.OrderDto
import web.booking.service.CartService

@RestController
@RequestMapping("/cart")
class CartController
constructor(
    private val cartService: CartService,
) {

    @PostMapping("/{book_id}")
    fun addCart(
        @PathVariable("book_id") id: Int,
        session: HttpSession,
    ): ResponseEntity<Int> {
        val count = cartService.addCart(session, id)

        return ResponseEntity(
            count,
            HttpStatus.OK,
        )
    }

    @DeleteMapping("/{book_id}")
    fun deleteBook(
        @PathVariable("book_id") id: Int,
        session: HttpSession,
    ): ResponseEntity<Int> {
        val count = cartService.deleteBook(session, id)

        return ResponseEntity(
            count,
            HttpStatus.OK,
        )
    }

    @DeleteMapping("/all/{book_id}")
    fun deleteAllBook(
        @PathVariable("book_id") id: Int,
        session: HttpSession,
    ): ResponseEntity<HttpStatus> {
        cartService.deleteAllBook(session, id)

        return ResponseEntity(
            HttpStatus.OK,
        )
    }

    @GetMapping()
    fun getCart(session: HttpSession): ResponseEntity<CartDto> {
        val cart = cartService.getCart(session)

        return ResponseEntity(
            cart,
            HttpStatus.OK,
        )
    }

    @PostMapping()
    fun createOrder(
        @RequestBody orderDto: OrderDto,
        request: HttpServletRequest,
    ): ResponseEntity<HttpStatus> {
        cartService.createOrder(request, orderDto)

        return ResponseEntity(
            HttpStatus.CREATED,
        )
    }
}
