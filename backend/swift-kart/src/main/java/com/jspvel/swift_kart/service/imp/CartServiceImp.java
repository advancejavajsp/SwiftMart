package com.jspvel.swift_kart.service.imp;

import java.util.Optional;

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

    	// Step 2: Find the product by productId
    	Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

    	// Step 3: Get the user's cart
    	Cart cart = user.getCart();
    	if (cart == null) {
    	    cart = new Cart();
    	    user.setCart(cart);
    	}

    	// Step 4: Check if the product is already in the cart
    	Optional<CartItem> existingCartItem = cart.getProduct().stream()
    	    .filter(cartItem -> cartItem.getProduct().getProductId().equals(productId))
    	    .findFirst();

    	if (existingCartItem.isPresent()) {
    	    // If the product is already in the cart, increase its quantity
    	    CartItem cartItem = existingCartItem.get();
    	    cartItem.setQuantity(cartItem.getQuantity() + 1);
    	} else {
    	    // If the product is not in the cart, add it as a new item
    	    CartItem cartItem = new CartItem();
    	    cartItem.setProduct(product);
    	    cartItem.setQuantity(1);
    	    cartItem.setProduct(product); // Set the cart for the CartItem
    	    cart.getProduct().add(cartItem);
    	}

    	// Step 5: Update the cart's total quantity and price
    	cart.setQuantity(cart.getQuantity() + 1); // Update the total quantity of items in the cart
    	cart.setPrice(cart.getPrice() + product.getPrice()); // Update the total price

    	// Step 6: Save the updated cart
    	cartRepository.save(cart);

    	// Step 7: Convert the updated cart to CartDTO
    	CartDTO cartDTO = new CartDTO(cart);

    	return cartDTO;

    }
}
