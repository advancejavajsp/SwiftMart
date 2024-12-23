package com.jspvel.swift_kart.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.service.Product;
import com.jspvel.swift_kart.service.ProductRepository;
import com.jspvel.swift_kart.service.ProductService;

@Service
public class ProductServiceImp implements ProductService {

	@Autowired
	@private ProductRepository productRepository;

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
		return null;
	}

	@Override
	public Optional<Product> getProductById(Long productId) {
		
		return productRepository.findById(productId);
	}

	@Override
	public Product addProduct(Product product) {
		
		return productRepository.save(product);
	}

//	@Override
//	public Product updateProduct(Long productId, Product updatedProduct) {
//		Optional<Product> previousProduct = productRepository.findById(productId);
//		
//		if(previousProduct.isPresent()) {
//			if(updatedProduct.)
//		}
//		return null;
//	}
	
	public boolean deleteProduct(Long productId) {
		Optional<Product> product = productRepository.findById(productId);
		
		if(product.isPresent()) {
			productRepository.deleteById(productId);
			return true;
		}
		return false;
		
	}
	
	
}
