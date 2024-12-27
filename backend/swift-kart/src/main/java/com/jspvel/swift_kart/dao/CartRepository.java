
package com.jspvel.swift_kart.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.User;

public interface CartRepository extends JpaRepository<Cart, String> {
	
}
