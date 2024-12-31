package com.jspvel.swift_kart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.dao.OrderRepository;
import com.jspvel.swift_kart.entity.Delivery;
import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.service.imp.DeliveryServiceImp;
import com.jspvel.swift_kart.util.DeliveryStatus;

@RestController
@CrossOrigin
@RequestMapping("/open/swiftmart")
public class DeliveryController {

    @Autowired
    private DeliveryServiceImp deliveryServiceImp;
    
    @Autowired
    private OrderRepository orderRepository;
    

    @PostMapping("/create/{orderId}/{deliveryAgentId}")
//    @ResponseStatus(HttpStatus.CREATED)
    public Delivery createDelivery(
            @PathVariable String orderId, 
            @PathVariable String deliveryAgentId) {

        // Call the service to create the delivery
        Delivery delivery = deliveryServiceImp.createDelivery(orderId, deliveryAgentId);

        // Fetch the updated order after the delivery creation
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));

        // Attach the updated order status to the response (as part of the delivery response)
        delivery.setDeliveryStatus(DeliveryStatus.DELEVIRED);
        return delivery;  // Return the created delivery
    }
    
    
    
    
    
    
    @PutMapping("/status/{id}")
    public ResponseEntity<Delivery> trackDeliveryStatus(@PathVariable String id, @RequestParam DeliveryStatus status) {
        Delivery updatedDelivery = deliveryServiceImp.trackDeliveryStatus(id, status);
       
        if (updatedDelivery != null) {
            return ResponseEntity.ok(updatedDelivery);  
        } else {
            return ResponseEntity.status(404).build();  
        }
    }
        
        @PutMapping("/delivery/{id}")
        public ResponseEntity<Delivery> markOrderAsDeliveredEntity(@PathVariable String id) {
           
            Delivery updatedDelivery = deliveryServiceImp.markAsDelivery(id);

            if (updatedDelivery != null) {
                return ResponseEntity.ok(updatedDelivery);  
            } else {
                return ResponseEntity.status(404).build();  
            }
        }
    

    @GetMapping("/{id}")
    public ResponseEntity<Delivery> getDeliveryById(@PathVariable String id) {
        Delivery delivery = deliveryServiceImp.getDeliveryById(id);
       
        if (delivery != null) {
            return ResponseEntity.ok(delivery);  
        } else {
            return ResponseEntity.status(404).build();  
        }
    }
}