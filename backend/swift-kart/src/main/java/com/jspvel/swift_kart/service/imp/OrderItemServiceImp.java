package com.jspvel.swift_kart.service.imp;

import com.jspvel.swift_kart.dao.OrderItemRepository;
import com.jspvel.swift_kart.entity.OrderItem;
import com.jspvel.swift_kart.service.OrderItemService;
import com.jspvel.swift_kart.util.CustomOrderItemIdGenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemServiceImp implements OrderItemService {

	@Autowired
	private OrderItemRepository orderItemRepository;

	@Autowired
	private CustomOrderItemIdGenerator customOrderItemIdGenerator;

	@Override
	public List<OrderItem> getAllOrderItem() {
		return orderItemRepository.findAll();
	}

	@Override
	public OrderItem getOrderItemById(String orderItemId) {
		return orderItemRepository.findById(orderItemId).orElse(null);
	}

	@Override
	public OrderItem addOrderItem(OrderItem orderItem) {

		orderItem.setOrderItemId(customOrderItemIdGenerator.generateCustomId());

		return orderItemRepository.save(orderItem);
	}

	@Override
	public boolean deleteOrderItem(String orderItemId) {

		OrderItem orderItem = orderItemRepository.findById(orderItemId).orElse(null);
		if (orderItem != null) {
			orderItemRepository.deleteById(orderItemId);
			return true;
		}
		return false;
	}

	@Override
	public OrderItem updateOrderItem(String orderItemId, OrderItem updateOrderItem) {

		OrderItem previousOrderItem = orderItemRepository.findById(orderItemId).orElse(null);

		if (previousOrderItem != null) {

			previousOrderItem.setPrice(updateOrderItem.getPrice());

			previousOrderItem.setQuantity(updateOrderItem.getQuantity());

			return orderItemRepository.save(previousOrderItem);
		}
		return null;
	}
}
