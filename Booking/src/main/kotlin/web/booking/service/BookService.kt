package web.booking.service

import web.booking.dto.BookDto
import web.booking.dto.sorting.RequestBookDto

interface BookService {
    fun getAll(requestBookDto: RequestBookDto): List<BookDto>
}
