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

import com.jspvel.swift_kart.entity.Product;
import com.jspvel.swift_kart.service.imp.ProductServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/open/products")
public class ProductController {

	@Autowired
	private ProductServiceImp productServiceImp;
	
	@GetMapping()
	public List<Product> getAllProducts(){
		return productServiceImp.getAllProducts();
	}
	
	@GetMapping("/{productId}")
	public ResponseEntity<Product> getProductById(@PathVariable String  productId){
		Product product = productServiceImp.getProductById(productId);
		if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
	}
	

//	@PostMapping("/products")
//	public ResponseEntity<Product> addProduct(@RequestBody Product product){
//		Product product2 = productServiceImp.addProduct(product);
//		return new ResponseEntity<>(product2, HttpStatus.CREATED);
//	}
	
//	@DeleteMapping("/products/{productId}")
//	public ResponseEntity<Void> deleteProduct(@PathVariable String productId){
//		Product deleted = productServiceImp.addProduct(productId);
//        if (deleted != null) {
//            return ResponseEntity.noContent().build(); 
//        } else {
//            return ResponseEntity.notFound().build(); 
//        }
//	}

	@PostMapping("/{categoreyId}")
	public ResponseEntity<Product> addProduct(@RequestBody Product product,@PathVariable String categoreyId){
		return new ResponseEntity<>(productServiceImp.addProduct(product,categoreyId), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{productId}")
	public ResponseEntity<Void> deleteProduct(@PathVariable String productId){
		boolean deleted = productServiceImp.deleteProduct(productId);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();  
        }
	}

	

	@PutMapping("/{productId}")
	public ResponseEntity<Product> updateProduct(@PathVariable ("productId") String productId, @RequestBody Product updatedProduct){
		Product updated = productServiceImp.updateProduct(productId, updatedProduct);
		
		if(updated != null) {
			return ResponseEntity.ok(updated);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable String categoryId) {
        return productServiceImp.getProductsByCategory(categoryId);
    }
	
}
