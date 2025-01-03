package com.jspvel.swift_kart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.dto.ProductDTO;
import com.jspvel.swift_kart.entity.Product;
import com.jspvel.swift_kart.service.imp.ProductServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/open/products")
public class ProductController {

	@Autowired
	private ProductServiceImp productServiceImp;

	@GetMapping()
	public List<Product> getAllProducts() {
		return productServiceImp.getAllProducts();
	}

	@GetMapping("/{productId}")
	public ResponseEntity<Product> getProductById(@PathVariable String productId) {
		Product product = productServiceImp.getProductById(productId);
		if (product != null) {
			return ResponseEntity.ok(product);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping("/{categoreyId}")
	public ResponseEntity<Product> addProduct(@RequestBody Product product, @PathVariable String categoreyId) {
		return new ResponseEntity<>(productServiceImp.addProduct(product, categoreyId), HttpStatus.CREATED);
	}

	 @DeleteMapping("/{productId}")
	    public ResponseEntity<String> deleteProduct(@PathVariable String productId) {
	        boolean result = productServiceImp.deleteProduct(productId);

	        if (result) {
	            return new ResponseEntity<>("Product successfully deleted", HttpStatus.OK);
	        } else {
	            // If the product wasn't found
	            return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
	        }
	    }

	 @PutMapping("/{productId}")
	 public ResponseEntity<Product> updateProduct(@PathVariable("productId") String productId, @RequestBody ProductDTO updatedProductDTO) {

	     Product updated = productServiceImp.updateProduct(productId, updatedProductDTO);

	     if (updated != null) {
	         return ResponseEntity.ok(updated);
	     } else {
	         return ResponseEntity.notFound().build(); 
	     }
	 }

	@GetMapping("/category/{categoryId}")
	public List<Product> getProductsByCategory(@PathVariable String categoryId) {
		return productServiceImp.getProductsByCategory(categoryId);
	}

}
