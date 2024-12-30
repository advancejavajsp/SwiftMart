package com.jspvel.swift_kart.service.imp;

import java.util.ArrayList;
import java.util.List;
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
import com.jspvel.swift_kart.util.CustomCartIdGenerator;

@Service
public class CartServiceImp implements CartService {

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CustomCartIdGenerator cartIdGenerator;

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
		cartDTO.setCart_id("CART"+userId);
		cartDTO.setUser(user);
		user.setCart(cartDTO);
		cartRepository.save(cartDTO);

		return cartDTO;
	}
	
    
    public CartDTO addProductToCart(String userId, String productId) {
    	User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

    	Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

    	if (product.getQuantityAvailable() == 0) {
    	    throw new RuntimeException("Out of Stock");
    	}
    	Cart cart = user.getCart();
    	if (cart == null) {
    	    cart = new Cart();
    	    user.setCart(cart);
    	}
  
    	Optional<CartItem> existingCartItem=null;
    	if(cart.getProduct()!=null) {
    	existingCartItem = cart.getProduct().stream()
    	    .filter(cartItem -> cartItem.getProduct().getProductId().equals(productId))
    	    .findFirst();
    	}
    	if (existingCartItem!=null && existingCartItem.isPresent()) {
    	    CartItem cartItem = existingCartItem.get();
    	    cartItem.setQuantity(cartItem.getQuantity() + 1);
    	} else {
    	   
    	    CartItem cartItem = new CartItem();
    	    cartItem.setProduct(product);
    	    cartItem.setQuantity(1);
    	    cartItem.setProduct(product); 
    	    if(cart.getProduct()==null) {
    	    	List<CartItem> list=new ArrayList<CartItem>();
    	    	list.add(cartItem);
    	    	cart.setProduct(list);
    	    }
    	    else
    	    cart.getProduct().add(cartItem);
    	}

    	cart.setQuantity(cart.getQuantity() + 1); 
    	cart.setPrice(cart.getPrice() + product.getPrice()); 

    	cartRepository.save(cart);

    	CartDTO cartDTO = new CartDTO(cart);

    	return cartDTO;

    }
    
    public CartDTO removeProductFromCart(String userId, String productId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));

        Cart cart = user.getCart();
        if (cart == null) {
            throw new RuntimeException("Cart not found for the user");
        }

        Optional<CartItem> cartItemOptional = cart.getProduct().stream()
            .filter(cartItem -> cartItem.getProduct().getProductId().equals(productId))
            .findFirst();

        if (cartItemOptional.isPresent()) {
            CartItem cartItem = cartItemOptional.get();
            if (cartItem.getQuantity() > 1) {
                cartItem.setQuantity(cartItem.getQuantity() - 1);
            } else {
                cart.getProduct().remove(cartItem);
            }

           
            cart.setPrice(cart.getPrice() - cartItem.getProduct().getPrice());
        } else {
            throw new RuntimeException("Product not found in the cart");
        }

        cartRepository.save(cart);

        CartDTO cartDTO = new CartDTO(cart);

        return cartDTO;
    }
    
    

}
