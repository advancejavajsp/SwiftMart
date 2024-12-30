package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, String> {
	
}
