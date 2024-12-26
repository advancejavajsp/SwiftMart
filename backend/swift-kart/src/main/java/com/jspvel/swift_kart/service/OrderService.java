package com.jspvel.swift_kart.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Order;

@Service
public interface OrderService {

	public Order placeOrder(Order order);
	
	public Order getOrderById(String orderId);
	
	public List<Order> getOrdersByUserId(Long userId);
	
	public Order cancelOrder(String orderId);
}
