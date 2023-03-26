package web.booking.controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import web.booking.dto.BookDto
import web.booking.dto.sorting.RequestBookDto
import web.booking.service.BookService

@RestController
@RequestMapping("/books")
class BookController
constructor(
    private val bookService: BookService,
) {

    @PostMapping()
    fun getAll(@RequestBody requestBookDto: RequestBookDto): ResponseEntity<List<BookDto>> {
        val bookDto = bookService.getAll(requestBookDto)

        return ResponseEntity(
            bookDto,
            HttpStatus.OK,
        )
    }
}
