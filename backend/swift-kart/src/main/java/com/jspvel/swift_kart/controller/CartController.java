package com.jspvel.swift_kart.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.dto.CartDTO;
import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.imp.CartServiceImp;

@RestController
@RequestMapping("/open")
public class CartController {

	@Autowired
	private CartServiceImp cartServiceImp;
	
	@PostMapping("/create/{userId}")
    public CartDTO createCartAndAssignToUser(@PathVariable String userId, @RequestBody CartDTO cartDTO) {
        return cartServiceImp.createCartAndAssignToUser(userId, cartDTO);
    }
	
	 
}
