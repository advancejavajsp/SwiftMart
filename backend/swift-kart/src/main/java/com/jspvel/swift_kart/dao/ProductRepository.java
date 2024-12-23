package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.Product;

public interface ProductRepository extends JpaRepository<Product, String> {
	

}
