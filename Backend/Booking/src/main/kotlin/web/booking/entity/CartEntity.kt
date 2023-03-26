package web.booking.entity

import jakarta.persistence.*

@Entity
@Table(name = "cart")
class CartEntity
constructor(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = -1,

    @Column(name = "count")
    var count: Int = 0,

    @Column(name = "total price")
    var price: Int = 0,

    @Column(name = "name")
    val name: String = "",

    @OneToMany(mappedBy = "cart")
    var bookOnCart: List<BookOnCartEntity> = emptyList(),
)
