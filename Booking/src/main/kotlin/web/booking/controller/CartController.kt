package web.booking.controller

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

    @PutMapping("/{session}/{book_id}")
    fun addCart(
        @PathVariable("session") session: String,
        @PathVariable("book_id") id: Int,
    ): ResponseEntity<HttpStatus> {
        cartService.addCart(session, id)

        return ResponseEntity(
            HttpStatus.OK,
        )
    }

    @DeleteMapping("/{session}/{book_id}")
    fun deleteBook(
        @PathVariable("session") session: String,
        @PathVariable("book_id") id: Int,
    ): ResponseEntity<HttpStatus> {
        cartService.deleteBook(session, id)

        return ResponseEntity(
            HttpStatus.OK,
        )
    }

    @DeleteMapping("/all/{session}/{book_id}")
    fun deleteAllBook(
        @PathVariable("session") session: String,
        @PathVariable("book_id") id: Int,
    ): ResponseEntity<HttpStatus> {
        cartService.deleteAllBook(session, id)

        return ResponseEntity(
            HttpStatus.OK,
        )
    }

    @GetMapping("/{session}")
    fun getCart(@PathVariable("session") session: String): ResponseEntity<CartDto> {
        val cart = cartService.getCart(session)

        return ResponseEntity(
            cart,
            HttpStatus.OK,
        )
    }

    @PostMapping()
    fun createOrder(@RequestBody orderDto: OrderDto): ResponseEntity<String> {
        val session = cartService.createOrder(orderDto)

        return ResponseEntity(
            session,
            HttpStatus.CREATED,
        )
    }
}
