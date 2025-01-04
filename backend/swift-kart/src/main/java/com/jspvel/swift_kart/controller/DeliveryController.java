package com.jspvel.swift_kart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.dao.OrderRepository;
import com.jspvel.swift_kart.entity.Delivery;
import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.exception.OrderNotFoundException;
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
	public Delivery createDelivery(@PathVariable String orderId, @PathVariable String deliveryAgentId) {

		Order order = orderRepository.findById(orderId)
				.orElseThrow(() -> new OrderNotFoundException("Order not found"));
		
		Delivery delivery = deliveryServiceImp.createDelivery(orderId, deliveryAgentId);
		delivery.setDeliveryStatus(DeliveryStatus.DELEVIRED);

		return delivery;
	}
	
	

}
