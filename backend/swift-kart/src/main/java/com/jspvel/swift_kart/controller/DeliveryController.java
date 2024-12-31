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
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.entity.Delivery;
import com.jspvel.swift_kart.service.imp.DeliveryServiceImp;
import com.jspvel.swift_kart.util.DeliveryStatus;

@RestController
@CrossOrigin
@RequestMapping("/open/swiftmart")
public class DeliveryController {

    @Autowired
    private DeliveryServiceImp deliveryServiceImp;

    @PostMapping("/create")
    public ResponseEntity<Delivery> createDelivery(@RequestBody Delivery delivery) {
        Delivery createdDelivery = deliveryServiceImp.createDelivery(delivery);
        return ResponseEntity.status(201).body(createdDelivery);  
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
