package com.jspvel.swift_kart.service;

import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Product;

@Service
public interface ProductService {

		
		public List<Product> getAllProducts();
		
		public Product getProductById(String  productId);
		
		public Product addProduct(Product product);
		
		public Product updateProduct(String productId, Product updatedProduct);
		
		public boolean deleteProduct(String productId);
}
