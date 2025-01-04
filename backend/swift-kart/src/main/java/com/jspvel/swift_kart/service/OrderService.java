package com.jspvel.swift_kart.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.util.OrderStatus;

@Service
public interface OrderService {
	
	
	public Order placeOrder(String userId, String paymentId);

//	public Order placeOrder(Order order);
	
	public Order getOrderById(String orderId);
	
	public List<Order> getOrdersByUserId(String userId);
	
	public Order cancelOrder(String orderId);
	
	public List<Order> getAllOrders();
	
	
}
