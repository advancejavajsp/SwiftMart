package com.jspvel.swift_kart.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Category;

@Service
public interface CategoryService {

public List<Category> getAllCategory();
	
	public Category getCategoryById(String categoryId);
	
	public Category addCategory(Category category);
	
	public Category updateCategory(String categoryId, Category updateCategory);
	
	public boolean deleateCategory(String CategoyId);


}

