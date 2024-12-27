package com.jspvel.swift_kart.service.imp;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.CartRepository;
import com.jspvel.swift_kart.dao.ProductRepository;
import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.dto.CartDTO;
import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.CartItem;
import com.jspvel.swift_kart.entity.Product;
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

//	 @Transactional
//	    public CartDTO createCartAndAssignToUser(String userId, CartDTO cartDTO) {
//	       
//	        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
//
//	        
//	        Cart cart = new Cart();
//	        cart.setUser(user);
//	        cart.setCart_id(cartDTO.getCart_id());
//	        cart.setQuantity(cartDTO.getQuantity());
//	        cart.setPrice(cartDTO.getPrice());
//
//	        Cart savedCart = cartRepository.save(cart);
//
//	        CartDTO savedCartDTO = new CartDTO();
//	        savedCartDTO.setCart_id(savedCart.getCart_id());
//	        savedCartDTO.setQuantity(savedCart.getQuantity());
//	        savedCartDTO.setPrice(savedCart.getPrice());
//	        savedCartDTO.setUser_id(user.getId());
//
//	        List<ProductDTO> productDTOs = savedCart.getProduct().stream()
//	            .map(product -> {
//	                ProductDTO productDTO = new ProductDTO();
//	                productDTO.setProductId(product.getProductId());
//	                productDTO.setName(product.getName());
//	                productDTO.setPrice(product.getPrice());
//	                productDTO.setQuantityAvailable(product.getQuantityAvailable());
//	                productDTO.setImageUrl(product.getImageUrl());
//	                productDTO.setDescription(product.getDescription());
//	                return productDTO;
//	            }).collect(Collectors.toList());
//
//	        savedCartDTO.setProduct(productDTOs);
//
//	        return savedCartDTO;
//	    }	

	public Cart createCartAndAssignToUser(String userId, Cart cartDTO) {
		User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
		cartDTO.setUser(user);
		user.setCart(cartDTO);
		cartRepository.save(cartDTO);

		return cartDTO;
	}
	
    
    public CartDTO addProductToCart(String userId, String productId) {
        // Step 1: Find the user by userId
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
      Product product=productRepository.findById(productId).orElseThrow();
       Cart cart= user.getCart();
       //add item in cartitem;
       CartItem cartItem=new CartItem();
     
       
      if( cart.getProduct().stream().anyMatch(cartItems->cartItems.getProduct().getProductId().equals(productId))) {
    	 cart.getProduct().stream().peek(ci->ci.setQuantity(ci.getQuantity()+1));
    	  
      }
      else {
    	  cartItem.setProduct(product);
    	  cartItem.setQuantity(1);
    	  cart.getProduct().add(cartItem);
      }
        // Step 4: Add the product to the cart (directly)
        cart.setQuantity(cart.getQuantity()+1);
      
          //logic to update price gst 
        cart.setPrice(cart.getPrice()+product.getPrice());
        // Step 5: Save the updated cart
        cartRepository.save(cart);

        // Step 6: Convert the updated cart to CartDTO
        CartDTO cartDTO = new CartDTO(cart);

        return cartDTO;
    }
}
