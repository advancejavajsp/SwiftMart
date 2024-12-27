package com.jspvel.swift_kart.controller;

import com.jspvel.swift_kart.entity.OrderItem;
import com.jspvel.swift_kart.service.imp.OrderItemServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/open/swiftmart")
public class OrderItemController {

    @Autowired
    private OrderItemServiceImp orderItemServiceImp;

    // Get all order items
    @GetMapping("/order-items")
    public List<OrderItem> getAllOrderItems() {
        return orderItemServiceImp.getAllOrderItem();
    }

    // Get order item by ID
    @GetMapping("/order-items/{orderItemId}")
    public ResponseEntity<OrderItem> getOrderItemById(@PathVariable String orderItemId) {
        OrderItem orderItem = orderItemServiceImp.getOrderItemById(orderItemId);
        if (orderItem != null) {
            return ResponseEntity.ok(orderItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Add new order item
    @PostMapping("/order-items")
    public ResponseEntity<OrderItem> addOrderItem(@RequestBody OrderItem orderItem) {
        try {
            OrderItem savedOrderItem = orderItemServiceImp.addOrderItem(orderItem);
            return new ResponseEntity<>(savedOrderItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete order item by ID
    @DeleteMapping("/order-items/{orderItemId}")
    public ResponseEntity<Void> deleteOrderItem(@PathVariable String orderItemId) {
        boolean deleted = orderItemServiceImp.deleteOrderItem(orderItemId);
        if (deleted) {
            return ResponseEntity.noContent().build(); // 204 No Content, means deleted successfully
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found, if order item not found
        }
    }

    // Update order item by ID
    @PutMapping("/order-items/{orderItemId}")
    public ResponseEntity<OrderItem> updateOrderItem(@PathVariable String orderItemId, @RequestBody OrderItem updatedOrderItem) {
        OrderItem updated = orderItemServiceImp.updateOrderItem(orderItemId, updatedOrderItem);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
