package web.booking.entity

import jakarta.persistence.*

@Entity
@Table(name = "book_on_cart")
class BookOnCartEntity
constructor(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = -1,

    @Column(name = "count")
    var count: Int = 0,

    @ManyToOne
    @JoinColumn(name = "book_id")
    var book: BookEntity,

    @ManyToOne
    @JoinColumn(name = "cart_id")
    var cart: CartEntity,
) {
    constructor(book: BookEntity, cart: CartEntity) : this(-1, 0, book, cart) {
        this.book = book
        this.cart = cart
    }
}
