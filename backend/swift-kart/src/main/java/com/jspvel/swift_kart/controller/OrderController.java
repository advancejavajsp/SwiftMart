package com.jspvel.swift_kart.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.service.imp.OrderServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/open/orders")
public class OrderController {

    @Autowired
    private OrderServiceImp orderServiceImp;
    
    

    @PostMapping("/place-order/{userId}/{paymentId}")
    public ResponseEntity<Order> placeOrder(@PathVariable String userId, @PathVariable String paymentId) {
        try {
            Order order = orderServiceImp.placeOrder(userId, paymentId);
            return ResponseEntity.ok(order);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(null);
        }
    }
    
    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderDetails(@PathVariable String orderId) {
        Order order = orderServiceImp.getOrderById(orderId);
        return ResponseEntity.ok(order);
    }
    
    

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable String userId) {
        List<Order> orders = orderServiceImp.getOrdersByUserId(userId);
        if (orders.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(orders);
    }
    
    @DeleteMapping("/orders/{orderId}")
    public ResponseEntity<Order> cancelOrder(@PathVariable String orderId) {
        Order cancelledOrder = orderServiceImp.cancelOrder(orderId);
        return ResponseEntity.ok(cancelledOrder);
    }
    
    @GetMapping("/get")
    public List<Order> getAllOrders() {
        return orderServiceImp.getAllOrders();
    }
	
}
