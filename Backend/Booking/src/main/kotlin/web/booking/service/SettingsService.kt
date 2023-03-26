package web.booking.service

interface SettingsService {
    fun getSession(): String
    fun getGenre(): List<String>
    fun getAge(): List<Int>
}
