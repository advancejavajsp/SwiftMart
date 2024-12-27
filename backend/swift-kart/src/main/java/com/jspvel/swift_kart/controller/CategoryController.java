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
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.entity.Category;
import com.jspvel.swift_kart.service.imp.CatergoryServiceImp;

@RestController
@CrossOrigin
public class CategoryController {
	
	@Autowired
	private CatergoryServiceImp catergoryServiceImp;
	
	
	
	@GetMapping("/open/categoryall")
	public List<Category> getAllCategories(){
		return catergoryServiceImp.getAllCategory();
	}
	
	@GetMapping("/open/category/{categoryId}")
	public ResponseEntity<Category> getCategoryById(@PathVariable String categoryId){
		Category category = catergoryServiceImp.getCategoryById(categoryId);
		if(category!=null) {
			return ResponseEntity.ok(category);
			}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PostMapping("/open/category")
	public ResponseEntity<Category> addCategory(@RequestBody Category category){
		System.out.println(category);
		
		return new ResponseEntity<>(catergoryServiceImp.addCategory(category),HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("open/category/{categoryId}")
	public ResponseEntity<Void> deleteCategory(@PathVariable String categoryId){
		boolean deleted = catergoryServiceImp.deleateCategory(categoryId);
		if (deleted) {
            return ResponseEntity.noContent().build(); 
        } else {
            return ResponseEntity.notFound().build();  
        }
	}
	
	@PutMapping("/category/{categoryId}")
	public ResponseEntity<Category> updateCategory(@PathVariable("categoryId") String categoryId, @RequestBody Category updateCategory){
		Category update = catergoryServiceImp.updateCategory(categoryId,updateCategory);
				if(update != null) {
					return ResponseEntity.ok(update);
				}else {
					return ResponseEntity.notFound().build();
				}
	}
	
	

}
