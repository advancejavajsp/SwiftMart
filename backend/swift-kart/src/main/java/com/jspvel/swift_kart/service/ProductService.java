package com.jspvel.swift_kart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface ProductService {

		
		public List<Product> getAllProducts();
		
		public Optional<Product> getProductById(Long productId);
		
		public Product addProduct(Product product);
		
		public Product updateProduct(Long productId, Product updatedProduct);
		
		public boolean deleteProduct(Long productId);
}
