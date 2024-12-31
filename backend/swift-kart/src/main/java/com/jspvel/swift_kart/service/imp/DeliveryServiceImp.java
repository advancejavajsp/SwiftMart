package com.jspvel.swift_kart.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.DeliveryRepository;
import com.jspvel.swift_kart.dao.OrderRepository;
import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.entity.Delivery;
import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.DeliveryService;
import com.jspvel.swift_kart.util.DeliveryCustomIdGenerator;
import com.jspvel.swift_kart.util.DeliveryStatus;
import com.jspvel.swift_kart.util.OrderStatus;

@Service
public class DeliveryServiceImp implements DeliveryService {

	@Autowired
	private DeliveryRepository deliveryRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private DeliveryCustomIdGenerator deliveryCustomIdGenerator;

	public Delivery createDelivery(String orderId, String deliveryAgentId) {

		Order order = orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));
		User deliveryAgent = userRepository.findById(deliveryAgentId)
				.orElseThrow(() -> new RuntimeException("Delivery agent not found"));

		Delivery delivery = new Delivery();
		delivery.setDeliveryId(deliveryCustomIdGenerator.generateDeliveryId());
		delivery.setOrderIds(orderId);
		delivery.setDeliveryStatus(DeliveryStatus.DELEVIRED);
		delivery.setDeliveryAgentId(deliveryAgent);

		order.setOrderStatus(OrderStatus.DELIVERED);
		orderRepository.save(order);

		deliveryRepository.save(delivery);

		return delivery;
	}
	
	

}
