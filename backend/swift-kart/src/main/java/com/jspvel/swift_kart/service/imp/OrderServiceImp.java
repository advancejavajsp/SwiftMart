package com.jspvel.swift_kart.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.DeliveryRepository;
import com.jspvel.swift_kart.dao.OrderItemRepository;
import com.jspvel.swift_kart.dao.OrderRepository;
import com.jspvel.swift_kart.dao.PaymentRepository;
import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.entity.OrderItem;
import com.jspvel.swift_kart.entity.Payment;
import com.jspvel.swift_kart.service.OrderService;

import jakarta.transaction.Transactional;

@Service
public class OrderServiceImp implements OrderService {
	
	 @Autowired
	    private OrderRepository orderRepository;

	    @Autowired
	    private PaymentRepository paymentRepository;

	    @Autowired
	    private OrderItemRepository orderItemRepository;

	    @Autowired
	    private DeliveryRepository deliveryRepository;

	@Transactional
	public Order placeOrder(Order orderRequest) {
       
        Payment payment = paymentRepository.findById(orderRequest.getOrderId())
                .orElseThrow(() -> new RuntimeException("Payment not found"));

       
        List<OrderItem> orderItems = orderItemRepository.findAllById(null);

       
        Order order = new Order();
        order.setOrderId(orderRequest.getOrderId());
        order.setOrderStatus(orderRequest.getOrderStatus());
        order.setTotalAmount(orderRequest.getTotalAmount());
//        order.setPayment(payment);
//        order.setOrderItem(orderItems);
        
       
        Order savedOrder = orderRepository.save(order);

        
        return savedOrder;
    }

}
