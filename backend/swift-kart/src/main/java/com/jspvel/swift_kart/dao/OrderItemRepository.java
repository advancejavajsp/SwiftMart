package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
