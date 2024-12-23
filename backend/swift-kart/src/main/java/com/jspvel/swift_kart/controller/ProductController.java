package com.jspvel.swift_kart.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.service.imp.ProductServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/swiftmart")
public class ProductController {

	@Autowired
	private ProductServiceImp productServiceImp;
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productServiceImp.getAllProducts();
	}
	
	@GetMapping("/products/{productId}")
	public ResponseEntity<Product> getProductById(@PathVariable Long productId){
		Optional<Product> product = productServiceImp.getProductById(productId);
		return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}
	
	@PostMapping("/products")
	public ResponseEntity<Product> addProduct(@RequestBody Product product){
		Product product = productServiceImp.addProduct(product);
		return new ResponseEntity<>(product, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/products/{productId}")
	public ResponseEntity<String> deleteProduct(@PathVariable Long productID){
		boolean isDeleted = productServiceImp.deleteProduct(productID);
		
		if(isDeleted) {
			return ResponseEntity.ok("Product is deleted");
		}else {
			return ResponseEntity.status(404).body("Product not found");
		}
	}
	
}
