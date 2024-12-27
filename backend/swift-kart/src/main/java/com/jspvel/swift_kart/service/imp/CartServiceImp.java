package com.jspvel.swift_kart.service.imp;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;

import com.jspvel.swift_kart.dao.CartRepository;
import com.jspvel.swift_kart.dao.ProductRepository;
import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.dto.CartDTO;
import com.jspvel.swift_kart.dto.ProductDTO;
import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.CartService;

import jakarta.transaction.Transactional;

@Service
public class CartServiceImp implements CartService {
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	private ProductRepository productRepository;
	
	   @Transactional
	    public CartDTO createCartAndAssignToUser(String userId, CartDTO cartDTO) {
	        // Step 1: Retrieve the user by userId
	        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

	        // Step 2: Convert CartDTO to Cart entity and associate it with the user
	        Cart cart = new Cart();
	        cart.setUser(user);
	        cart.setCart_id(cartDTO.getCart_id());
	        cart.setQuantity(cartDTO.getQuantity());
	        cart.setPrice(cartDTO.getPrice());

	        // Step 3: Save the cart
	        Cart savedCart = cartRepository.save(cart);

	        // Step 4: Convert Cart to CartDTO to return
	        CartDTO savedCartDTO = new CartDTO();
	        savedCartDTO.setCart_id(savedCart.getCart_id());
	        savedCartDTO.setQuantity(savedCart.getQuantity());
	        savedCartDTO.setPrice(savedCart.getPrice());
	        savedCartDTO.setUser_id(user.getId());

	        // Step 5: Populate the products in the cart
	        List<ProductDTO> productDTOs = savedCart.getProduct().stream()
	            .map(product -> {
	                ProductDTO productDTO = new ProductDTO();
	                productDTO.setProductId(product.getProductId());
	                productDTO.setName(product.getName());
	                productDTO.setPrice(product.getPrice());
	                productDTO.setQuantityAvailable(product.getQuantityAvailable());
	                productDTO.setImageUrl(product.getImageUrl());
	                productDTO.setDescription(product.getDescription());
	                return productDTO;
	            }).collect(Collectors.toList());

	        savedCartDTO.setProduct(productDTOs);

	        return savedCartDTO;
	    }

	
}
