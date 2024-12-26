// package com.jspvel.swift_kart.dao;
//
//import com.jspvel.swift_kart.entity.OrderItem;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface OrderItemRepository extends JpaRepository<OrderItem, String> {
//    
//}
package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, String> {
    
}
