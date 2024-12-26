package com.jspvel.swift_kart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.service.imp.OrderServiceImp;

@RestController
public class OrderController {

	@Autowired
	private OrderServiceImp orderServiceImp;

	@PostMapping
	public ResponseEntity<Order> placeOrder(@RequestBody Order orderRequest) {

		Order savedOrder = orderServiceImp.placeOrder(orderRequest);

		return ResponseEntity.ok(savedOrder);
	}

}
