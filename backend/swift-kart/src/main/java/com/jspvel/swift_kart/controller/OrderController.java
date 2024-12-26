package com.jspvel.swift_kart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.service.imp.OrderServiceImp;

@RestController
public class OrderController {

    @Autowired
    private OrderServiceImp orderServiceImp;

    @PostMapping("/orders")
    public ResponseEntity<Order> placeOrder(@RequestBody Order order) {
        
        Order newOrder = orderServiceImp.placeOrder(order);
        return ResponseEntity.status(201).body(newOrder);
    }
    
    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderDetails(@PathVariable String orderId) {
        Order order = orderServiceImp.getOrderById(orderId);
        return ResponseEntity.ok(order);
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable Long userId) {
        List<Order> orders = orderServiceImp.getOrdersByUserId(userId);
        return ResponseEntity.ok(orders);
    }
    
    @DeleteMapping("/orders/{orderId}")
    public ResponseEntity<Order> cancelOrder(@PathVariable String orderId) {
        Order cancelledOrder = orderServiceImp.cancelOrder(orderId);
        return ResponseEntity.ok(cancelledOrder);
    }

	
}
