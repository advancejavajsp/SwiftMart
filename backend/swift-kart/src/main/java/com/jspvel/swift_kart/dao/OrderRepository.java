package com.jspvel.swift_kart.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.Order;

public interface OrderRepository extends JpaRepository<Order, String> {

		
		
}
