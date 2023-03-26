package web.booking.exception.base

import org.springframework.http.HttpStatus

abstract class BaseException
constructor(
    val apiError: ApiError,
    val httpStatus: HttpStatus,
) : RuntimeException(apiError.message)
