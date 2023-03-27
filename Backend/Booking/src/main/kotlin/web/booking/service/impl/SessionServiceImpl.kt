package web.booking.service.impl

import jakarta.servlet.http.HttpSession
import org.springframework.stereotype.Service
import web.booking.entity.CartEntity
import web.booking.repository.BookRepository
import web.booking.repository.CartRepository
import web.booking.service.SettingsService

@Service
class SessionServiceImpl
constructor(
    private val bookRepository: BookRepository,
    private val cartRepository: CartRepository,
) : SettingsService {
    override fun getCartCount(session: HttpSession): Int {
        val cart = cartRepository.findByName(session.id) ?: cartRepository.save(CartEntity(name = session.id))

        return cart.count
    }

    override fun getGenre(): List<String> {
        return bookRepository.findDistinctByOrderByGenre().map { it.genre }
    }

    override fun getAge(): List<Int> {
        return bookRepository.findDistinctByOrderByAge().map { it.age }
    }
}
