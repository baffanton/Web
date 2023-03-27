package web.booking.service

import jakarta.servlet.http.HttpSession

interface SettingsService {
    fun getCartCount(session: HttpSession): Int
    fun getGenre(): List<String>
    fun getAge(): List<Int>
}
