package com.jspvel.swift_kart.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.util.OrderStatus;

@Service
public interface OrderService {

	public Order placeOrder(Order order);
	
	public Order getOrderById(String orderId);
	
	public List<Order> getOrdersByUserId(String userId);
	
	public Order cancelOrder(String orderId);
	
	public Order updateOrderStatus(String orderId, OrderStatus status);
}
