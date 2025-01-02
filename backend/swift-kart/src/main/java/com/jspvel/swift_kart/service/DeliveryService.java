package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Delivery;

@Service
public interface DeliveryService { 

Delivery createDelivery(String orderId, String deliveryAgentId);
}
