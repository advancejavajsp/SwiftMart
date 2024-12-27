package com.jspvel.swift_kart.dao;

import java.util.List;



import com.jspvel.swift_kart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

}
