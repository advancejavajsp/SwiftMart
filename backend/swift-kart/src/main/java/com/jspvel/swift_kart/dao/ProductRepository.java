package com.jspvel.swift_kart.dao;

import com.jspvel.swift_kart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, String> {

    
}
