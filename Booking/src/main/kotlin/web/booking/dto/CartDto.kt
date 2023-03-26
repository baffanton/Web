package web.booking.dto

data class CartDto
constructor(
    val count: Int,
    val price: Int,
    var books: List<BookOnCartDto> = emptyList(),
)
