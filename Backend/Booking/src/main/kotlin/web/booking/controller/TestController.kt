package web.booking.controller

import jakarta.servlet.http.HttpSession
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/test")
class TestController {

    @GetMapping
    fun test(session: HttpSession): String {
        var text = session.id ?: "session"
        return text
    }
}
