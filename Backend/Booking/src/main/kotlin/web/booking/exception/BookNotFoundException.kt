package web.booking.exception

import org.springframework.http.HttpStatus
import web.booking.exception.base.ApiError
import web.booking.exception.base.BaseException

class BookNotFoundException
constructor(
    id: Int,
) : BaseException(
    ApiError("Книги с id: $id, не существует"),
    HttpStatus.NOT_FOUND,
)
