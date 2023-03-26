package web.booking.service.impl

import org.springframework.stereotype.Service
import web.booking.entity.CartEntity
import web.booking.repository.BookRepository
import web.booking.repository.CartRepository
import web.booking.service.SettingsService
import java.util.*

@Service
class SessionServiceImpl
constructor(
    private val bookRepository: BookRepository,
    private val cartRepository: CartRepository,
) : SettingsService {

    override fun getSession(): String {
        val session = UUID.randomUUID().toString()
        cartRepository.save(CartEntity(name = session))

        return session
    }

    override fun getGenre(): List<String> {
        return bookRepository.findDistinctByOrderByGenre().map { it.genre }
    }

    override fun getAge(): List<Int> {
        return bookRepository.findDistinctByOrderByAge().map { it.age }
    }
}
