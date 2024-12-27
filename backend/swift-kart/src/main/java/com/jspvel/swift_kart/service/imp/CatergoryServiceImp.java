package com.jspvel.swift_kart.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.CategoryRepository;
import com.jspvel.swift_kart.entity.Category;
import com.jspvel.swift_kart.service.CategoryService;
import com.jspvel.swift_kart.util.CategoryCustomIdGenerator;

@Service
public class CatergoryServiceImp implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	

	@Autowired
	CategoryCustomIdGenerator categoryCustomIdGenerator;
	
	
	@Override
	public List<Category> getAllCategory() {
		return categoryRepository.findAll();
	}

	@Override
	public Category getCategoryById(String categoryId) {
		return categoryRepository.findById(categoryId).orElse(null);
	}


	@Override
	public Category addCategory(Category category) {
		category.setCategoryId(categoryCustomIdGenerator.generateCategoryId());
		
		return categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(String categoryId, Category updateCategory) {
		Category previousCategory = categoryRepository.findById(categoryId).orElse(null);
		
		if(previousCategory != null) {
			previousCategory.setDescription(updateCategory.getDescription());
			previousCategory.setName(updateCategory.getName());
			return categoryRepository.save(previousCategory);
		}
		return null;
	}

	@Override
	public boolean deleateCategory(String CategoyId) {
		Category category = categoryRepository.findById(CategoyId).orElse(null);
		
		if(category != null) {
			categoryRepository.deleteById(CategoyId);
			return true;
		}
		return false;
	}
	
	
}


