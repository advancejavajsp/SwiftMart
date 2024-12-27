package com.jspvel.swift_kart.service;


import com.jspvel.swift_kart.entity.OrderItem;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface OrderItemService {

	public List<OrderItem> getAllOrderItem();
	
	public OrderItem getOrderItemById(String OrderItemId);
	
	public OrderItem updateOrderItem(String OrderItemId, OrderItem updateOrderItem);
	
	public boolean deleteOrderItem(String OrderItemId);

	OrderItem addOrderItem(OrderItem orderItem);
	
	
}
