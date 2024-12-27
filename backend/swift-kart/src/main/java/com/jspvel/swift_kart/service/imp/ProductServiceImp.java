package com.jspvel.swift_kart.service.imp;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.CartRepository;
import com.jspvel.swift_kart.dao.CategoryRepository;
import com.jspvel.swift_kart.dao.ProductRepository;
import com.jspvel.swift_kart.entity.Category;
import com.jspvel.swift_kart.entity.Product;
import com.jspvel.swift_kart.service.ProductService;
import com.jspvel.swift_kart.util.CustomProductIdGenrator;

@Service
public class ProductServiceImp implements ProductService {

	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private CategoryRepository categoryRepository;

<<<<<<< HEAD
    @Autowired
    private CustomProductIdGenrator customProductIdGenrator;
    
    @Override
    public Product findProductById(String productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    
    @Override
    public String deleteProductById(String productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        productRepository.delete(product);
        return "Product deleted successfully";
    }

    
    @Override
    public String updateProductDetails(String productId, String name, Long categoryId, double price,
                                       int quantityAvailable, String imageUrl, String description) {
        Optional<Product> optionalProduct = productRepository.findById(productId);

        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();

           
            product.setName(name);
            product.setPrice(price);
            product.setQuantityAvailable(quantityAvailable);
            product.setImageUrl(imageUrl);
            product.setDescription(description);

           
            productRepository.save(product);

            return "Product updated successfully";
        } else {
            return "Product not found";
        }
    }
=======
	@Autowired
	private CustomProductIdGenrator customProductIdGenrator;
>>>>>>> 36651367c7167e54be882a10476ef5284413adfb

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();

	}

<<<<<<< HEAD
	public Product addProduct(Product product) {
		
		String customId = customProductIdGenrator.generateCustomId();
        product.setProductId(customId);
		
		return productRepository.save(product);
	}
	
	public List<Product> getProductsByCategory(String categoryId) {
        Category category = new Category();  
        category.setCategoryId(categoryId);
        return null;
        
//        return productRepository.findByCategory(categoryId);
    }


	public Product updateProduct(String productId, Product updatedProduct) {
		
		return null;
	}


=======
>>>>>>> 36651367c7167e54be882a10476ef5284413adfb
	@Override
	public Product getProductById(String productId) {

		return productRepository.findById(productId).orElse(null);
	}

	@Override
	public Product addProduct(Product product, String categoreyId) {

		Category category = categoryRepository.findById(categoreyId).orElseThrow();
		String generatedId = customProductIdGenrator.generateCustomId();
		product.setProductId(generatedId);
		product.setCategory(category);
		product=productRepository.save(product);
		if (category.getProducts() != null) {
			List<Product> products = new ArrayList<Product>();
			products.add(product);
			category.setProducts(products);
		} else
			category.getProducts().add(product);
		categoryRepository.save(category);
		return product;
	}

	@Override
	public Product updateProduct(String productId, Product updatedProduct) {
		Product previousProduct = productRepository.findById(productId).orElse(null);

		if (previousProduct != null) {

			previousProduct.setName(updatedProduct.getName());
			previousProduct.setPrice(updatedProduct.getPrice());
			previousProduct.setDescription(updatedProduct.getDescription());
			previousProduct.setQuantityAvailable(updatedProduct.getQuantityAvailable());
			previousProduct.setImageUrl(updatedProduct.getImageUrl());

			return productRepository.save(previousProduct);
		}
		return null;
	}

<<<<<<< HEAD

	


	@Override
=======
>>>>>>> 36651367c7167e54be882a10476ef5284413adfb
	public boolean deleteProduct(String productId) {
		Product product = productRepository.findById(productId).orElse(null);

		if (product != null) {
			productRepository.deleteById(productId);
			return true;
		}
		return false;

	}

	public List<Product> getProductsByCategory(String categoryId) {
		Category category = new Category();
		category.setCategoryId(categoryId);

//        return productRepository.findByCategory(categoryId);

		return null;
	}

}
