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
import com.jspvel.swift_kart.exception.CartNotFoundException;
import com.jspvel.swift_kart.exception.ProductNotFoundException;
import com.jspvel.swift_kart.exception.UserNotFoundException;
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
	
	
	public Cart createCartAndAssignToUser(String userId, Cart cartDTO) {
		User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User not found"));
		cartDTO.setCart_id("CART"+userId);
		cartDTO.setUser(user);
		user.setCart(cartDTO);
		cartRepository.save(cartDTO);

		return cartDTO;
	}
	
    
    public CartDTO addProductToCart(String userId, String productId) {
    	User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User not found"));

    	Product product = productRepository.findById(productId).orElseThrow(() -> new ProductNotFoundException("Product not found"));

    	if (product.getQuantityAvailable() == 0) {
    	    throw new RuntimeException("Out of Stock");
    	}
    	Cart cart = user.getCart();
    	if (cart == null) {
    	    cart = new Cart();
    	    cart.setCart_id(cartIdGenerator.generateCustomId());
    	    cart.setUser(user);
    	    cartRepository.save(cart);
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
            .orElseThrow(() -> new UserNotFoundException("User not found"));

        Cart cart = user.getCart();
        if (cart == null) {
            throw new CartNotFoundException("Cart not found for the user");
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
            cart.setQuantity(cart.getQuantity()-1);
        } else {
            throw new ProductNotFoundException("Product not found in the cart");
        }

        cartRepository.save(cart);

        CartDTO cartDTO = new CartDTO(cart);

        return cartDTO;
    }


	public CartDTO findCartByUserId(String userId) {
		// TODO Auto-generated method stub
		User user= userRepository.findById(userId).orElseThrow();
		Cart cart = user.getCart();
		if(cart==null) {
			 cart=createCartAndAssignToUser(userId, new Cart());
		}
		
		return new CartDTO(cart);
	}
    
   
}
