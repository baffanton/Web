package web.booking.exception

import org.springframework.http.HttpStatus
import web.booking.exception.base.ApiError
import web.booking.exception.base.BaseException

class EmptyCartException : BaseException(
    ApiError("Невозможно оформить заказ, так как корзина пуста"),
    HttpStatus.OK,
)
