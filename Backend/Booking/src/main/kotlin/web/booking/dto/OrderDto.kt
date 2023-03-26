package web.booking.dto

import java.time.LocalDateTime

data class OrderDto
constructor(
    val city: String,
    val date: LocalDateTime,
)
