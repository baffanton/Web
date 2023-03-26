package web.booking.exception

import org.springframework.http.HttpStatus
import web.booking.exception.base.ApiError
import web.booking.exception.base.BaseException

class CartNotFoundException
constructor(
    session: String,
) : BaseException(
    ApiError("Корзина с сессией: $session, не найдена"),
    HttpStatus.NOT_FOUND,
)
