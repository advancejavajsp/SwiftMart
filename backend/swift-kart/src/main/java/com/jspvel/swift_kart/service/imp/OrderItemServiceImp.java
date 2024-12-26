package com.jspvel.swift_kart.service.imp;
//
//import com.jspvel.swift_kart.dao.OrderItemRepository;
//import com.jspvel.swift_kart.entity.OrderItem;
//import com.jspvel.swift_kart.service.OrderItemService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class OrderItemServiceImp implements OrderItemService {
//
//    @Autowired
//    private OrderItemRepository orderItemRepository;
//
//    // Create or Update an OrderItem
//    public OrderItem saveOrderItem(OrderItem orderItem) {
//        return orderItemRepository.save(orderItem);
//    }
//
//    // Get all OrderItems
//    public List<OrderItem> getAllOrderItems() {
//        return orderItemRepository.findAll();
//    }
//
//    // Get OrderItem by ID
//    public Optional<OrderItem> getOrderItemById(String orderItemId) {
//        return orderItemRepository.findById(orderItemId);
//    }
//
//    // Delete OrderItem by ID
//    public void deleteOrderItemById(String orderItemId) {
//        orderItemRepository.deleteById(orderItemId);
//    }
//}
//package com.jspvel.swift_kart.repository;

import com.jspvel.swift_kart.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemServiceImp extends JpaRepository<OrderItem, String> {
    // You can add custom queries here if needed
}
