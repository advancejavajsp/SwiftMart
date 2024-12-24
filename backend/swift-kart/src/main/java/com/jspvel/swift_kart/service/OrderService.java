package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Order;

@Service
public interface OrderService {

	 public Order placeOrder(Order orderRequest);
}
