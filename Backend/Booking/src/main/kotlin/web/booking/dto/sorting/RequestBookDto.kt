package web.booking.dto.sorting

import web.booking.enums.DirectionType
import web.booking.enums.FindType

data class RequestBookDto
constructor(
    val type: FindType,
    val direction: DirectionType,
    val filters: FilterDto?,
)
