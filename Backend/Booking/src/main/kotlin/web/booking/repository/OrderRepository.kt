package web.booking.repository

import org.springframework.data.repository.CrudRepository
import web.booking.entity.OrderEntity

interface OrderRepository : CrudRepository<OrderEntity, Int>
