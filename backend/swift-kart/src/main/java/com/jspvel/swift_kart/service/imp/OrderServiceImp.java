package com.jspvel.swift_kart.service.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.CartItemRepository;
import com.jspvel.swift_kart.dao.CartRepository;
import com.jspvel.swift_kart.dao.OrderItemRepository;
import com.jspvel.swift_kart.dao.OrderRepository;
import com.jspvel.swift_kart.dao.PaymentRepository;
import com.jspvel.swift_kart.dao.ProductRepository;
import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.CartItem;
import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.entity.OrderItem;
import com.jspvel.swift_kart.entity.Payment;
import com.jspvel.swift_kart.entity.Product;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.exception.OrderNotFoundException;
import com.jspvel.swift_kart.exception.OutOfStockException;
import com.jspvel.swift_kart.exception.PaymentFailedException;
import com.jspvel.swift_kart.service.OrderService;
import com.jspvel.swift_kart.util.CustomOrderItemIdGenerator;
import com.jspvel.swift_kart.util.OrderCustomIdGenerator;
import com.jspvel.swift_kart.util.OrderStatus;
import com.jspvel.swift_kart.util.PaymentStatus;

import jakarta.transaction.Transactional;

@Service
public class OrderServiceImp implements OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private OrderItemRepository orderItemRepository;

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private PaymentRepository paymentRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CartServiceImp cartServiceImp;

	@Autowired
	private CustomOrderItemIdGenerator customOrderItemIdGenerator;

	@Autowired
	private OrderCustomIdGenerator orderCustomIdGenerator;

    @Autowired
	private CartItemRepository cartItemRepository;

//	@Override
//	public Order placeOrder(String userId, String paymentId) {
//		User user = userRepository.findById(userId).orElseThrow(null);
//
//		Payment payment = paymentRepository.findById(paymentId).orElse(null);
//
//		if (!(payment.getPaymentStatus().equals(PaymentStatus.SUCCESS))) {
//		    throw new PaymentFailedException("Payment failed.");
//		}
//		// Create the order
//		Order order = new Order();
//		order.setOrderId(orderCustomIdGenerator.generateCategoryId());
//		order.setOrderStatus(OrderStatus.PENDING);
//		order.setCustomer_id(user);
//
//		// Calculate total amount
//		Cart cart = user.getCart();
//		if (cart == null || cart.getProduct() == null) {
//		    throw new IllegalArgumentException("Cart is empty.");
//		}
//
//		order.setTotalAmount(cart.getPrice());
//		List<OrderItem> items = new ArrayList<OrderItem>();
//		for (CartItem cartItem : cart.getProduct()) {
//		    Product product = cartItem.getProduct();
//
//		    // Reduce quantity
//		    if (product.getQuantityAvailable() <= 0)
//		        throw new OutOfStockException("Out of stock");
//		    product.setQuantityAvailable(product.getQuantityAvailable() - cartItem.getQuantity());
//		    productRepository.save(product);
//
//		    // Add order items
//		    OrderItem orderItem = new OrderItem();
//		    orderItem.setOrderItemId(customOrderItemIdGenerator.generateCustomId());
//		    orderItem.setProductId(product.getProductId());
//		    orderItem.setQuantity(cartItem.getQuantity());
//		    orderItem.setPrice(cartItem.getProduct().getPrice());
//		    orderItem.setOrder(order);
//		    items.add(orderItem);
//
//		    cartItem.setProduct(null);
//		    cartItem.setQuantity(0);
//
//		    // If the cart item quantity is greater than 1, reduce the quantity
//		    if (cartItem.getQuantity() > 1) {
//		        cartItem.setQuantity(cartItem.getQuantity() - 1);
//		    } else {
//		        cart.getProduct().remove(cartItem); // Remove the item from the cart
//		    }
//		    cartRepository.save(cart);
//		}
//
//		// Set order items to the order
//		order.setOrderItem(items);
//		orderRepository.save(order);
//
//		// Clear the cart by removing all products
//		cart.getProduct().clear();  // This removes all products from the cart
//
//		// Optionally, you can also delete the cart if it should be emptied and removed entirely
//		 cartRepository.delete(cart);
//
//		// Set the payment details for the order
//		payment.setOrder(order);
//		order.setPayment(payment);
//		paymentRepository.save(payment);
//
//		return order;
//	}
	
	

	public List<Order> getOrdersByUserId(Long userId) {
//	        return orderRepository.findByUserId(userId);
		return null;
	}

	public Order cancelOrder(String orderId) {
		Order order = orderRepository.findById(orderId)
				.orElseThrow(() -> new OrderNotFoundException("Order not found with id " + orderId));

		return order;
	}

	public Order getOrderById(String orderId) {
		Optional<Order> order = orderRepository.findById(orderId);
		if (order.isPresent()) {
			return order.get();
		} else {
			throw new OrderNotFoundException("Order not found with id " + orderId);
		}
	}

	@Override
	public List<Order> getOrdersByUserId(String userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional
	@Override
	public Order placeOrder(String userId, String paymentId) {
		//find payment if payment is sucess place get user and get the cart
		
		Payment payment=paymentRepository.findById(paymentId).orElseThrow();
		if(payment.getPaymentStatus().equals(PaymentStatus.SUCCESS)) {
			
			User user = userRepository.findById(userId).orElseThrow();
			
			//from user get cart
			Cart cart=user.getCart();
			if(cart!=null && !(cart.getProduct().isEmpty())) {
				
				Order order=new Order();
				
				order.setOrderId(customOrderItemIdGenerator.generateCustomId());
				order.setCustomer_id(user);
				order.setPayment(payment);
				order.setTotalAmount(cart.getPrice());
				order.setOrderStatus(OrderStatus.PENDING);
		        
				orderRepository.save(order);
				List<OrderItem> items=new ArrayList<OrderItem>();
				for(CartItem cartItem:cart.getProduct()) {
					Product product=cartItem.getProduct();
					
					OrderItem item=new OrderItem();
					item.setOrder(order);
					item.setOrderItemId(customOrderItemIdGenerator.generateCustomId());
					item.setPrice(product.getPrice()*cartItem.getQuantity());
					item.setQuantity(cartItem.getQuantity());
					
					product.setQuantityAvailable(product.getQuantityAvailable()-cartItem.getQuantity());
					cartItem.setProduct(null);
					productRepository.save(product);
					cartItemRepository.delete(cartItem);
					items.add(item);
					
				}
				order.setOrderItem(items);
				orderRepository.save(order);
				
				cart.setPrice(0);
				cart.setQuantity(0);
				cart.setProduct(new ArrayList<CartItem>());
				cartRepository.save(cart);
				
				user.getOrder().add(order);
				userRepository.save(user);
				
			}
			else {
				throw new PaymentFailedException("exp");
			}
			
		}
		//if payment is not sucess throw payment not found exception
		throw new PaymentFailedException("payment failed");
		
	}
	
	

}
