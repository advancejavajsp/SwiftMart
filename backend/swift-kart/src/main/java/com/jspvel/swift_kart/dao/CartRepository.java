package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, String> {
    
}
