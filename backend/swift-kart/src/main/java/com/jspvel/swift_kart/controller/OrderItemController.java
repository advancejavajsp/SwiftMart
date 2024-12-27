
package com.jspvel.swift_kart.controller;

import com.jspvel.swift_kart.entity.OrderItem;
import com.jspvel.swift_kart.service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/order-items")
@CrossOrigin
public class OrderItemController {

    @Autowired
    private OrderItemService orderItemService;

   
    @PostMapping
    public ResponseEntity<OrderItem> createOrUpdateOrderItem(@RequestBody OrderItem orderItem) {
        OrderItem savedOrderItem = orderItemService.saveOrderItem(orderItem);
        return ResponseEntity.ok(savedOrderItem);
    }

    
    @GetMapping
    public ResponseEntity<List<OrderItem>> getAllOrderItems() {
        List<OrderItem> orderItems = orderItemService.getAllOrderItems();
        return ResponseEntity.ok(orderItems);
    }

    
    @GetMapping("/{id}")
    public ResponseEntity<OrderItem> getOrderItemById(@PathVariable("id") String orderItemId) {
        Optional<OrderItem> orderItem = orderItemService.getOrderItemById(orderItemId);
        if (orderItem.isPresent()) {
            return ResponseEntity.ok(orderItem.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderItem(@PathVariable("id") String orderItemId) {
        orderItemService.deleteOrderItemById(orderItemId);
        return ResponseEntity.noContent().build();
    }
}
