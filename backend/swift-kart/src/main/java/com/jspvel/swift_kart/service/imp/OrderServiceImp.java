package com.jspvel.swift_kart.service.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
import com.jspvel.swift_kart.exception.CartNotFoundException;
import com.jspvel.swift_kart.exception.OrderNotFoundException;
import com.jspvel.swift_kart.exception.PaymentFailedException;
import com.jspvel.swift_kart.service.OrderService;
import com.jspvel.swift_kart.util.CustomOrderItemIdGenerator;
import com.jspvel.swift_kart.util.OrderCustomIdGenerator;
import com.jspvel.swift_kart.util.OrderStatus;
import com.jspvel.swift_kart.util.PaymentStatus;

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
	private CartItemRepository cartItemRepository;

	@Autowired
	private CustomOrderItemIdGenerator customOrderItemIdGenerator;

	@Autowired
	private OrderCustomIdGenerator orderCustomIdGenerator;

	@Override
	public Order placeOrder(String userId, String paymentId) {
		User user = userRepository.findById(userId).orElseThrow(null);

		Payment payment = paymentRepository.findById(paymentId).orElse(null);
		
		if (!(payment.getPaymentStatus().equals(PaymentStatus.SUCCESS))) {
			throw new PaymentFailedException("Payment failed.");
		}
		System.out.println("hello");
		Order order = new Order();
		order.setOrderId(orderCustomIdGenerator.generateCategoryId());
		order.setOrderStatus(OrderStatus.PENDING);
		order.setCustomer_id(user);

		Cart cart = user.getCart();
		if (cart == null || cart.getProduct() == null || cart.getProduct().isEmpty()) {
			throw new CartNotFoundException("Cart is empty.");
		}

		order.setTotalAmount(cart.getPrice());
		List<OrderItem> items = new ArrayList<OrderItem>();

		for (CartItem cartItem : cart.getProduct()) {
			Product product = cartItem.getProduct();

			if (product.getQuantityAvailable() <= 0) {
				cartItemRepository.delete(cartItem);
				continue;
			}

			product.setQuantityAvailable(product.getQuantityAvailable() - cartItem.getQuantity());
			productRepository.save(product);

			OrderItem orderItem = new OrderItem();
			orderItem.setOrderItemId(customOrderItemIdGenerator.generateCustomId());
			orderItem.setProductId(product.getProductId());
			orderItem.setQuantity(cartItem.getQuantity());
			orderItem.setPrice(cartItem.getProduct().getPrice());
			orderItem.setOrder(order);
			items.add(orderItem);

			if (cartItem.getQuantity() <= 1) {
				cartItemRepository.delete(cartItem);
			}
		}

		order.setOrderItem(items);
		order.setPayment(payment);
		orderRepository.save(order);
		
		payment.setOrder(order);
		paymentRepository.save(payment);

		cart.getProduct().clear();
		cart.setQuantity(0);
		cart.setPrice(0);
		cart.setUser(null);
		cartRepository.save(cart);

		cartRepository.delete(cart);
		if(user.getOrder()==null) {
			List<Order> list = new ArrayList<Order>();
			list.add(order);
			user.setOrder(list);
		}
		else
        user.getOrder().add(order);  
		user.setCart(null);
		
		userRepository.save(user);
        
		return order;

	}

	public void deleteCart(User user) {

		Cart cart = user.getCart();
		cartItemRepository.deleteAll(cart.getProduct());

		cartRepository.delete(user.getCart());
		userRepository.save(user);

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

	 public List<Order> getOrdersByUserId(String userId) {
	        List<Order> orders = orderRepository.findAll();
	        
	        List<Order> filteredOrders = orders.stream()
	                .filter(order-> order.getCustomer_id().getId().equals(userId)).toList();

	        if (filteredOrders.isEmpty()) {
	            throw new OrderNotFoundException("No orders found for user with id " + userId);
	        }

	        return filteredOrders;
	    }
	 
	 public List<Order> getAllOrders() {
	        return orderRepository.findAll();
	    }
	 
	 

}
