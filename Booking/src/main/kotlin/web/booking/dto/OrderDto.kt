package web.booking.dto

import java.time.LocalDateTime

data class OrderDto
constructor(
    val session: String,
    val city: String,
    val date: LocalDateTime,
)
