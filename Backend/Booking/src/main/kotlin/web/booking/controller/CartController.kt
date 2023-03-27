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

    @PostMapping("/{book_id}")
    fun addCart(
        @PathVariable("book_id") id: Int,
    ): ResponseEntity<HttpStatus> {
        cartService.addCart(id)

        return ResponseEntity(
            HttpStatus.OK,
        )
    }

    @DeleteMapping("/{book_id}")
    fun deleteBook(
        @PathVariable("book_id") id: Int,
    ): ResponseEntity<HttpStatus> {
        cartService.deleteBook(id)

        return ResponseEntity(
            HttpStatus.OK,
        )
    }

    @DeleteMapping("/all/{book_id}")
    fun deleteAllBook(
        @PathVariable("book_id") id: Int,
    ): ResponseEntity<HttpStatus> {
        cartService.deleteAllBook(id)

        return ResponseEntity(
            HttpStatus.OK,
        )
    }

    @GetMapping()
    fun getCart(): ResponseEntity<CartDto> {
        val cart = cartService.getCart()

        return ResponseEntity(
            cart,
            HttpStatus.OK,
        )
    }

    @PostMapping()
    fun createOrder(@RequestBody orderDto: OrderDto): ResponseEntity<String> {
        val session = cartService.createOrder(orderDto)

        return ResponseEntity(
            "session",
            HttpStatus.CREATED,
        )
    }
}
