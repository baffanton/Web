package web.booking.entity

import jakarta.persistence.*

@Entity
@Table(name = "book")
class BookEntity
constructor(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = -1,

    @Column(name = "picture_url")
    val picture: String = "",

    @Column(name = "title")
    val title: String = "",

    @Column(name = "author")
    val author: String = "",

    @Column(name = "publisher")
    val publisher: String = "",

    @Column(name = "pages")
    val pages: Int = -1,

    @Column(name = "year")
    val year: String = "",

    @Column(name = "age")
    val age: Int = -1,

    @Column(name = "price")
    val price: Int = -1,

    @Column(name = "genre")
    val genre: String = "",

    @OneToMany(mappedBy = "book")
    var bookOnCart: List<BookOnCartEntity> = emptyList(),
)
