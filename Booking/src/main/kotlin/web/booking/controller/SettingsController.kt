package web.booking.controller

import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import web.booking.service.SettingsService

@RestController
@RequestMapping("/settings")
class SettingsController
constructor(
    private val sessionService: SettingsService,
) {

    @GetMapping("/session")
    fun getSession(): ResponseEntity<String> {
        val session = sessionService.getSession()

        return ResponseEntity(
            session,
            HttpStatus.OK,
        )
    }

    @GetMapping("/genre")
    fun getGenre(): ResponseEntity<List<String>> {
        val genres = sessionService.getGenre()

        return ResponseEntity(
            genres,
            HttpStatus.OK,
        )
    }

    @GetMapping("/age")
    fun getAge(): ResponseEntity<List<Int>> {
        val ages = sessionService.getAge()

        return ResponseEntity(
            ages,
            HttpStatus.OK,
        )
    }
}
