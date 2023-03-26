package web.booking.dto

data class BookOnCartDto
constructor(
    val id: Int,
    val picture: String,
    val title: String,
    val author: String,
    val price: Int,
    val count: Int,
)
