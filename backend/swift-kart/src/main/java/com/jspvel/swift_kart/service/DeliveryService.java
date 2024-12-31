package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Delivery;
import com.jspvel.swift_kart.util.DeliveryStatus;

@Service
public interface DeliveryService {

Delivery createDelivery(String orderId, String deliveryAgentId);
Delivery getDeliveryById(String id);
Delivery trackDeliveryStatus(String id, DeliveryStatus status);

Delivery markAsDelivery(String deliveryId);
}