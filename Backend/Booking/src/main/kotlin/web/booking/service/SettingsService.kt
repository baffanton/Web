package web.booking.service

interface SettingsService {
    fun getGenre(): List<String>
    fun getAge(): List<Int>
}
