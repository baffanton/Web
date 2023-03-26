package web.booking.exception

import org.springframework.http.HttpStatus
import web.booking.exception.base.ApiError
import web.booking.exception.base.BaseException

class CartNotIncludeException
constructor(
    session: String,
    id: Int,
) : BaseException(
    ApiError("В сессии: $session, не найдена книга с id: $id"),
    HttpStatus.NOT_FOUND,
)
