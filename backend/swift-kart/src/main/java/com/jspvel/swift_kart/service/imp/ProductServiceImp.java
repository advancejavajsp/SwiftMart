package com.jspvel.swift_kart.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.ProductRepository;
import com.jspvel.swift_kart.entity.Product;
import com.jspvel.swift_kart.service.ProductService;

@Service
public class ProductServiceImp implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
		
	}

	@Override
	public Product getProductById(String  productId) {
		
		return productRepository.findById(productId).orElse(null);
	}

	@Override
	public Product addProduct(Product product) {
		
		return productRepository.save(product);
	}

	@Override
	public Product updateProduct(String productId, Product updatedProduct) {
		Product previousProduct = productRepository.findById(productId).orElse(null);
		
		if(previousProduct !=null) {
			
			previousProduct.setName(updatedProduct.getName());
			previousProduct.setPrice(updatedProduct.getPrice());
			previousProduct.setDescription(updatedProduct.getDescription());
			previousProduct.setQuantityAvailable(updatedProduct.getQuantityAvailable());
			previousProduct.setImageUrl(updatedProduct.getImageUrl());
		 
			return productRepository.save(previousProduct);
		}
		return null;
	}
	
	public boolean deleteProduct(String productId) {
		Product product = productRepository.findById(productId).orElse(null);
		
		if(product != null) {
			productRepository.deleteById(productId);
			return true;
		}
		return false;
		
	}

	

	
	
	
}
