package web.booking.service.impl

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpSession
import jakarta.transaction.Transactional
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import web.booking.dto.BookOnCartDto
import web.booking.dto.CartDto
import web.booking.dto.OrderDto
import web.booking.entity.BookOnCartEntity
import web.booking.entity.CartEntity
import web.booking.entity.OrderEntity
import web.booking.exception.BookNotFoundException
import web.booking.exception.CartNotFoundException
import web.booking.exception.CartNotIncludeException
import web.booking.exception.EmptyCartException
import web.booking.repository.BookOnCartRepository
import web.booking.repository.BookRepository
import web.booking.repository.CartRepository
import web.booking.repository.OrderRepository
import web.booking.service.CartService

@Service
class CartServiceImpl
constructor(
    private val bookRepository: BookRepository,
    private val cartRepository: CartRepository,
    private val bookOnCartRepository: BookOnCartRepository,
    private val orderRepository: OrderRepository,
) : CartService {

    @Transactional
    override fun addCart(session: HttpSession, id: Int): Int {
        val cartName = session.id
        val cart = cartRepository.findByName(cartName) ?: cartRepository.save(CartEntity(name = cartName))
        val book = bookRepository.findByIdOrNull(id) ?: throw BookNotFoundException(id)
        val bookOnCart = bookOnCartRepository.findByBookAndCart(book, cart) ?: BookOnCartEntity(book, cart)

        bookOnCart.count++
        cart.count++
        cart.price += book.price

        bookOnCartRepository.save(bookOnCart)
        cartRepository.save(cart)

        return cart.count
    }

    @Transactional
    override fun deleteBook(session: HttpSession, id: Int): Int {
        val cartName = session.id
        val cart = cartRepository.findByName(cartName) ?: throw CartNotFoundException(cartName)
        val book = bookRepository.findByIdOrNull(id) ?: throw BookNotFoundException(id)
        val bookOnCart = bookOnCartRepository.findByBookAndCart(book, cart)
            ?: throw CartNotIncludeException(cartName, id)

        if (bookOnCart.count == 1) {
            bookOnCartRepository.delete(bookOnCart)
        } else {
            bookOnCart.count--
            bookOnCartRepository.save(bookOnCart)
        }

        cart.count--
        cart.price -= book.price
        cartRepository.save(cart)

        return bookOnCart.count
    }

    @Transactional
    override fun deleteAllBook(session: HttpSession, id: Int) {
        val cartName = session.id
        val cart = cartRepository.findByName(cartName) ?: throw CartNotFoundException(cartName)
        val book = bookRepository.findByIdOrNull(id) ?: throw BookNotFoundException(id)
        val bookOnCart = bookOnCartRepository.findByBookAndCart(book, cart)
            ?: throw CartNotIncludeException(cartName, id)

        bookOnCartRepository.delete(bookOnCart)

        cart.count -= bookOnCart.count
        cart.price -= bookOnCart.count * book.price
        cartRepository.save(cart)
    }

    @Transactional
    override fun getCart(session: HttpSession): CartDto {
        val cartName = session.id
        val cartEntity = cartRepository.findByName(cartName) ?: cartRepository.save(CartEntity(name = cartName))
        val books = bookOnCartRepository.findAllByCartOrderByBook(cartEntity)?.map { it -> it.toDto() }

        return cartEntity.toDto(books!!)
    }

    @Transactional
    override fun createOrder(request: HttpServletRequest, orderDto: OrderDto) {
        val cartName = request.session.id
        val cart = cartRepository.findByName(cartName) ?: throw CartNotFoundException(cartName)

        if (cart.count > 0) {
            orderRepository.save(orderDto.toEntity(cartName))

            request.session.invalidate()
            request.session

            return
        }

        throw EmptyCartException()
    }

    private fun CartEntity.toDto(books: List<BookOnCartDto>): CartDto {
        return CartDto(
            count = this.count,
            price = this.price,
            books = books,
        )
    }

    private fun BookOnCartEntity.toDto(): BookOnCartDto {
        return BookOnCartDto(
            id = this.book.id,
            picture = this.book.picture,
            title = this.book.title,
            author = this.book.author,
            price = this.book.price,
            count = this.count,
        )
    }

    private fun OrderDto.toEntity(session: String): OrderEntity {
        return OrderEntity(
            session = session,
            city = this.city,
            date = this.date,
        )
    }
}
