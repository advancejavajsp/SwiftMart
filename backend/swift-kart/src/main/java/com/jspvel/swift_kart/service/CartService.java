package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dto.CartDTO;
import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.Product;

@Service
public interface CartService {

//	public CartDTO createCartAndAssignToUser(String userId, CartDTO cartDTO);
	
	public Cart createCartAndAssignToUser(String userId,Cart cartDTO);
	
	public CartDTO addProductToCart(String userId, String productId);
}
