package web.booking.dto

data class BookDto
constructor(
    val id: Int,
    val picture: String,
    val title: String,
    val author: String,
    val publisher: String,
    val pages: Int,
    val year: String,
    val age: Int,
    val price: Int,
    val genre: String,
)
