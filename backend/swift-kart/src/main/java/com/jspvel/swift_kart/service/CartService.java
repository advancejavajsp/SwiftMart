package com.jspvel.swift_kart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dto.CartDTO;
import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.User;

@Service
public interface CartService {

	public CartDTO createCartAndAssignToUser(String userId, CartDTO cartDTO);		
}
