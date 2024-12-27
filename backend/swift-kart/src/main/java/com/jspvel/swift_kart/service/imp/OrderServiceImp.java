package com.jspvel.swift_kart.service.imp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.DeliveryRepository;
import com.jspvel.swift_kart.dao.OrderItemRepository;
import com.jspvel.swift_kart.dao.OrderRepository;
import com.jspvel.swift_kart.dao.PaymentRepository;
import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.entity.OrderItem;
import com.jspvel.swift_kart.entity.Payment;
import com.jspvel.swift_kart.exception.OrderNotFoundException;
import com.jspvel.swift_kart.service.OrderItemService;
import com.jspvel.swift_kart.service.OrderService;
import com.jspvel.swift_kart.service.PaymentService;
import com.jspvel.swift_kart.util.OrderStatus;

import jakarta.transaction.Transactional;

@Service
public class OrderServiceImp implements OrderService {
	
	 @Autowired
	    private OrderRepository orderRepository;

	    @Autowired
	    private OrderItemService orderItemService;  // Service to fetch order items
	    @Autowired
	    private PaymentService paymentService;  // Service to fetch payment details

	@Transactional
	public Order placeOrder(Order orderRequest) {
       
       
	        return null;  
	    }
	    
	    public Order getOrderById(String orderId) {
	        Optional<Order> order = orderRepository.findById(orderId);
	        if (order.isPresent()) {
	            return order.get();  
	        } else {
	            throw new OrderNotFoundException("Order not found with id " + orderId);
	       }
	    }
	    
	    public List<Order> getOrdersByUserId(Long userId) {
//	        return orderRepository.findByUserId(userId);
	        return null;
	    }
	    
	    public Order cancelOrder(String orderId) {
	        Order order = orderRepository.findById(orderId).orElseThrow(() -> new OrderNotFoundException("Order not found with id " + orderId));

	
	        if (order.getOrderStatus() == OrderStatus.DELIVERED) {
	            throw new IllegalStateException("Order has already been delivered and cannot be cancelled");
	        }

	        
	        order.setOrderStatus(OrderStatus.CANCELLED);
	        
	        
	        return orderRepository.save(order);
	    }

		@Override
		public List<Order> getOrdersByUserId(String userId) {
			// TODO Auto-generated method stub
			return null;
		}

}
