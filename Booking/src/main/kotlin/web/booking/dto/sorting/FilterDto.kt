package web.booking.dto.sorting

data class FilterDto
constructor(
    val genre: String?,
    val age: Int?,
    val price: PriceDto?,
)
