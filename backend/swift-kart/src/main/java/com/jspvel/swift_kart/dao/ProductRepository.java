package com.jspvel.swift_kart.dao;

import java.util.List;
import java.util.Optional;

import com.jspvel.swift_kart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

	Optional<Product> findById(String productId); 
}
