package web.booking.service.impl

import org.springframework.stereotype.Service
import web.booking.dto.BookDto
import web.booking.dto.sorting.PriceDto
import web.booking.dto.sorting.RequestBookDto
import web.booking.entity.BookEntity
import web.booking.enums.DirectionType
import web.booking.enums.FindType
import web.booking.repository.BookRepository
import web.booking.service.BookService
import java.util.*

@Service
class BookServiceImpl
constructor(
    private val bookRepository: BookRepository,
) : BookService {

    override fun getAll(requestBookDto: RequestBookDto): List<BookDto> {
        val books = getBooksEntity(requestBookDto)

        return books.map { it.toDto() }
    }

    private fun getBooksEntity(requestBookDto: RequestBookDto): List<BookEntity> {
        return when (requestBookDto.filters) {
            null -> getBooksEntityWithoutFilters(requestBookDto)
            else -> getBooksEntityWithFilters(requestBookDto)
        }
    }

    private fun getBooksEntityWithoutFilters(requestBookDto: RequestBookDto): List<BookEntity> {
        return when (requestBookDto.direction) {
            DirectionType.ASC -> when (requestBookDto.type) {
                FindType.TITLE -> bookRepository.findAllByOrderByTitle()
                FindType.PRICE -> bookRepository.findAllByOrderByPrice()
            }
            DirectionType.DESC -> when (requestBookDto.type) {
                FindType.TITLE -> bookRepository.findAllByOrderByTitleDesc()
                FindType.PRICE -> bookRepository.findAllByOrderByPriceDesc()
            }
        }
    }

    private fun getBooksEntityWithFilters(requestBookDto: RequestBookDto): List<BookEntity> {
        val genre = requestBookDto.filters?.genre ?: ""
        val age = requestBookDto.filters?.age ?: -1
        val price = requestBookDto.filters?.price ?: PriceDto(-1, -1)

        return when {
            genre.isNotBlank() && age.isEmpty() && price.isEmpty() -> getBooksEntityWithFiltersByGenre(requestBookDto, genre)
            genre.isBlank() && !age.isEmpty() && price.isEmpty() -> getBooksEntityWithFiltersByAge(requestBookDto, age)
            genre.isBlank() && age.isEmpty() && !price.isEmpty() -> getBooksEntityWithFiltersByPrice(requestBookDto, price)
            genre.isNotBlank() && !age.isEmpty() && price.isEmpty() -> getBooksEntityWithFiltersByGenreAndAge(requestBookDto, genre, age)
            genre.isNotBlank() && age.isEmpty() && !price.isEmpty() -> getBooksEntityWithFiltersByGenreAndPrice(requestBookDto, genre, price)
            genre.isBlank() && !age.isEmpty() && !price.isEmpty() -> getBooksEntityWithFiltersByAgeAndPrice(requestBookDto, age, price)
            genre.isNotBlank() && !age.isEmpty() && !price.isEmpty() -> getBooksEntityWithFiltersByGenreAndAgeAndPrice(requestBookDto, genre, age, price)
            else -> emptyList()
        }
    }

    private fun getBooksEntityWithFiltersByGenre(requestBookDto: RequestBookDto, genre: String): List<BookEntity> {
        return when (requestBookDto.direction) {
            DirectionType.ASC -> when (requestBookDto.type) {
                FindType.TITLE -> bookRepository.findAllByGenreOrderByTitle(genre)
                FindType.PRICE -> bookRepository.findAllByGenreOrderByPrice(genre)
            }
            DirectionType.DESC -> when (requestBookDto.type) {
                FindType.TITLE -> bookRepository.findAllByGenreOrderByTitleDesc(genre)
                FindType.PRICE -> bookRepository.findAllByGenreOrderByPriceDesc(genre)
            }
        }
    }

    private fun getBooksEntityWithFiltersByAge(requestBookDto: RequestBookDto, age: Int): List<BookEntity> {
        return when (requestBookDto.direction) {
            DirectionType.ASC -> when (requestBookDto.type) {
                FindType.TITLE -> bookRepository.findAllByAgeOrderByTitle(age)
                FindType.PRICE -> bookRepository.findAllByAgeOrderByPrice(age)
            }
            DirectionType.DESC -> when (requestBookDto.type) {
                FindType.TITLE -> bookRepository.findAllByAgeOrderByTitleDesc(age)
                FindType.PRICE -> bookRepository.findAllByAgeOrderByPriceDesc(age)
            }
        }
    }

    private fun getBooksEntityWithFiltersByPrice(requestBookDto: RequestBookDto, price: PriceDto): List<BookEntity> {
        val min = price.min ?: -1
        val max = price.max ?: -1

        return when {
            !min.isEmpty() && max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByPriceGreaterThanEqualOrderByTitle(min)
                    FindType.PRICE -> bookRepository.findAllByPriceGreaterThanEqualOrderByPrice(min)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByPriceGreaterThanEqualOrderByTitleDesc(min)
                    FindType.PRICE -> bookRepository.findAllByPriceGreaterThanEqualOrderByPriceDesc(min)
                }
            }
            min.isEmpty() && !max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByPriceLessThanEqualOrderByTitle(max)
                    FindType.PRICE -> bookRepository.findAllByPriceLessThanEqualOrderByPrice(max)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByPriceLessThanEqualOrderByTitleDesc(max)
                    FindType.PRICE -> bookRepository.findAllByPriceLessThanEqualOrderByPriceDesc(max)
                }
            }
            !min.isEmpty() && !max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByPriceBetweenOrderByTitle(min, max)
                    FindType.PRICE -> bookRepository.findAllByPriceBetweenOrderByPrice(min, max)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByPriceBetweenOrderByTitleDesc(min, max)
                    FindType.PRICE -> bookRepository.findAllByPriceBetweenOrderByPriceDesc(min, max)
                }
            }
            else -> emptyList()
        }
    }

    private fun getBooksEntityWithFiltersByGenreAndAge(requestBookDto: RequestBookDto, genre: String, age: Int): List<BookEntity> {
        return when (requestBookDto.direction) {
            DirectionType.ASC -> when (requestBookDto.type) {
                FindType.TITLE -> bookRepository.findAllByGenreAndAgeOrderByTitle(genre, age)
                FindType.PRICE -> bookRepository.findAllByGenreAndAgeOrderByPrice(genre, age)
            }
            DirectionType.DESC -> when (requestBookDto.type) {
                FindType.TITLE -> bookRepository.findAllByGenreAndAgeOrderByTitleDesc(genre, age)
                FindType.PRICE -> bookRepository.findAllByGenreAndAgeOrderByPriceDesc(genre, age)
            }
        }
    }

    private fun getBooksEntityWithFiltersByGenreAndPrice(requestBookDto: RequestBookDto, genre: String, price: PriceDto): List<BookEntity> {
        val min = price.min ?: -1
        val max = price.max ?: -1

        return when {
            !min.isEmpty() && max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndPriceGreaterThanEqualOrderByTitle(genre, min)
                    FindType.PRICE -> bookRepository.findAllByGenreAndPriceGreaterThanEqualOrderByPrice(genre, min)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndPriceGreaterThanEqualOrderByTitleDesc(genre, min)
                    FindType.PRICE -> bookRepository.findAllByGenreAndPriceGreaterThanEqualOrderByPriceDesc(genre, min)
                }
            }
            min.isEmpty() && !max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndPriceLessThanEqualOrderByTitle(genre, max)
                    FindType.PRICE -> bookRepository.findAllByGenreAndPriceLessThanEqualOrderByPrice(genre, max)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndPriceLessThanEqualOrderByTitleDesc(genre, max)
                    FindType.PRICE -> bookRepository.findAllByGenreAndPriceLessThanEqualOrderByPriceDesc(genre, max)
                }
            }
            !min.isEmpty() && !max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndPriceBetweenOrderByTitle(genre, min, max)
                    FindType.PRICE -> bookRepository.findAllByGenreAndPriceBetweenOrderByPrice(genre, min, max)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndPriceBetweenOrderByTitleDesc(genre, min, max)
                    FindType.PRICE -> bookRepository.findAllByGenreAndPriceBetweenOrderByPriceDesc(genre, min, max)
                }
            }
            else -> emptyList()
        }
    }

    private fun getBooksEntityWithFiltersByAgeAndPrice(requestBookDto: RequestBookDto, age: Int, price: PriceDto): List<BookEntity> {
        val min = price.min ?: -1
        val max = price.max ?: -1

        return when {
            !min.isEmpty() && max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByAgeAndPriceGreaterThanEqualOrderByTitle(age, min)
                    FindType.PRICE -> bookRepository.findAllByAgeAndPriceGreaterThanEqualOrderByPrice(age, min)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByAgeAndPriceGreaterThanEqualOrderByTitleDesc(age, min)
                    FindType.PRICE -> bookRepository.findAllByAgeAndPriceGreaterThanEqualOrderByPriceDesc(age, min)
                }
            }
            min.isEmpty() && !max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByAgeAndPriceLessThanEqualOrderByTitle(age, max)
                    FindType.PRICE -> bookRepository.findAllByAgeAndPriceLessThanEqualOrderByPrice(age, max)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByAgeAndPriceLessThanEqualOrderByTitleDesc(age, max)
                    FindType.PRICE -> bookRepository.findAllByAgeAndPriceLessThanEqualOrderByPriceDesc(age, max)
                }
            }
            !min.isEmpty() && !max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByAgeAndPriceBetweenOrderByTitle(age, min, max)
                    FindType.PRICE -> bookRepository.findAllByAgeAndPriceBetweenOrderByPrice(age, min, max)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByAgeAndPriceBetweenOrderByTitleDesc(age, min, max)
                    FindType.PRICE -> bookRepository.findAllByAgeAndPriceBetweenOrderByPriceDesc(age, min, max)
                }
            }
            else -> emptyList()
        }
    }

    private fun getBooksEntityWithFiltersByGenreAndAgeAndPrice(requestBookDto: RequestBookDto, genre: String, age: Int, price: PriceDto): List<BookEntity> {
        val min = price.min ?: -1
        val max = price.max ?: -1

        return when {
            !min.isEmpty() && max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndAgeAndPriceGreaterThanEqualOrderByTitle(genre, age, min)
                    FindType.PRICE -> bookRepository.findAllByGenreAndAgeAndPriceGreaterThanEqualOrderByPrice(genre, age, min)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndAgeAndPriceGreaterThanEqualOrderByTitleDesc(genre, age, min)
                    FindType.PRICE -> bookRepository.findAllByGenreAndAgeAndPriceGreaterThanEqualOrderByPriceDesc(genre, age, min)
                }
            }
            min.isEmpty() && !max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndAgeAndPriceLessThanEqualOrderByTitle(genre, age, max)
                    FindType.PRICE -> bookRepository.findAllByGenreAndAgeAndPriceLessThanEqualOrderByPrice(genre, age, max)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndAgeAndPriceLessThanEqualOrderByTitleDesc(genre, age, max)
                    FindType.PRICE -> bookRepository.findAllByGenreAndAgeAndPriceLessThanEqualOrderByPriceDesc(genre, age, max)
                }
            }
            !min.isEmpty() && !max.isEmpty() -> when (requestBookDto.direction) {
                DirectionType.ASC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndAgeAndPriceBetweenOrderByTitle(genre, age, min, max)
                    FindType.PRICE -> bookRepository.findAllByGenreAndAgeAndPriceBetweenOrderByPrice(genre, age, min, max)
                }
                DirectionType.DESC -> when (requestBookDto.type) {
                    FindType.TITLE -> bookRepository.findAllByGenreAndAgeAndPriceBetweenOrderByTitleDesc(genre, age, min, max)
                    FindType.PRICE -> bookRepository.findAllByGenreAndAgeAndPriceBetweenOrderByPriceDesc(genre, age, min, max)
                }
            }
            else -> emptyList()
        }
    }

    private fun BookEntity.toDto(): BookDto {
        return BookDto(
            id = this.id,
            picture = this.picture,
            title = this.title,
            author = this.author,
            publisher = this.publisher,
            pages = this.pages,
            year = this.year,
            age = this.age,
            price = this.price,
            genre = this.genre,
        )
    }

    private fun Int.isEmpty(): Boolean {
        return this == -1
    }

    private fun PriceDto.isEmpty(): Boolean {
        return this.min == -1 && this.max == -1
    }
}
