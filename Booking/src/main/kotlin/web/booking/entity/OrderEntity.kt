package web.booking.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "order_book")
class OrderEntity
constructor(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = -1,

    @Column(name = "session")
    var session: String = "",

    @Column(name = "city")
    var city: String = "",

    @Column(name = "date")
    val date: LocalDateTime = LocalDateTime.now(),
)
