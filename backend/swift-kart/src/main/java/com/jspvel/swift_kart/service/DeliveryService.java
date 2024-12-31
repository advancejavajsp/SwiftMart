package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Delivery;
import com.jspvel.swift_kart.util.DeliveryStatus;

@Service
public interface DeliveryService {

	Delivery createDelivery(Delivery delivery);
	Delivery getDeliveryById(String id);
	Delivery trackDeliveryStatus(String id, DeliveryStatus status);
}
