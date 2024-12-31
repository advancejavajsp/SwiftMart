package com.jspvel.swift_kart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.dto.CartDTO;
import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.service.imp.CartServiceImp;

@RestController
@RequestMapping("/open/cart")
@CrossOrigin
public class CartController {

	@Autowired
	private CartServiceImp cartServiceImp;
	
//	 @PostMapping("/create/{userId}")
//	    public CartDTO createCartAndAssignToUser(@PathVariable String userId, @RequestBody CartDTO cartDTO) {
//	        return cartServiceImp.createCartAndAssignToUser(userId, cartDTO);
//	    }
	
	@PostMapping("/{userId}")
    public ResponseEntity<?>createCartAndAssignToUser(@PathVariable String userId, @RequestBody Cart cartDTO) {
        return  ResponseEntity.ok( cartServiceImp.createCartAndAssignToUser(userId, cartDTO));
    }
	
	@GetMapping("find/{userId}")
    public ResponseEntity<?> findCartByUserId(@PathVariable String userId) {
        return  ResponseEntity.ok( cartServiceImp.findCartByUserId(userId));
	}
	
	@PostMapping("/{userId}/{productId}")
    public CartDTO addProductToCart(@PathVariable String userId, @PathVariable String productId) {
        return cartServiceImp.addProductToCart(userId, productId);
    }
	
	@DeleteMapping("/{userId}/{productId}")
    public CartDTO removeProductFromCart(@PathVariable String userId, @PathVariable String productId) {
        return cartServiceImp.removeProductFromCart(userId, productId);
    }
	 
}
