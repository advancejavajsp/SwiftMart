package com.jspvel.swift_kart.service;

import java.util.List;

import com.jspvel.swift_kart.entity.Product;

public interface ProductService {

		
		public List<Product> getAllProducts();
		
		public Product getProductById(String  productId);
		
		public Product addProduct(Product product);
		
		public Product updateProduct(String productId, Product updatedProduct);
		
		public boolean deleteProduct(String productId);
		
		public List<Product> getProductsByCategory(String categoryId);
    Product findProductById(String productId);
    String deleteProductById(String productId);
    String updateProductDetails(String productId, String name, Long categoryId, double price, int quantityAvailable, String imageUrl, String description);
}
