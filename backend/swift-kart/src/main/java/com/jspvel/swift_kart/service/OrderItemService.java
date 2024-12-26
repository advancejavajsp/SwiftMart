package com.jspvel.swift_kart.service;

import com.jspvel.swift_kart.dao.OrderItemRepository;
import com.jspvel.swift_kart.entity.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    // Create or Update OrderItem
    public OrderItem saveOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    // Get all OrderItems
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    // Get OrderItem by ID
    public Optional<OrderItem> getOrderItemById(String orderItemId) {
        return orderItemRepository.findById(orderItemId);
    }

    // Delete OrderItem by ID
    public void deleteOrderItemById(String orderItemId) {
        orderItemRepository.deleteById(orderItemId);
    }
}
//package com.jspvel.swift_kart.service;
//
//import com.jspvel.swift_kart.entity.OrderItem;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface OrderItemService {
//
//    // Create or Update an OrderItem
//    OrderItem saveOrderItem(OrderItem orderItem);
//
//    // Get all OrderItems
//    List<OrderItem> getAllOrderItems();
//
//    // Get OrderItem by ID
//    Optional<OrderItem> getOrderItemById(String orderItemId);
//
//    // Delete OrderItem by ID
//    void deleteOrderItemById(String orderItemId);
//}
