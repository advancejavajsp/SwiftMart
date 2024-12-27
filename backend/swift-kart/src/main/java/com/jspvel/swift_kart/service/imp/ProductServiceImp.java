package com.jspvel.swift_kart.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

	public List<Product> getAllProducts() {
		
		return null;
	}

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


	@Override
	public Product getProductById(String productId) {
		// TODO Auto-generated method stub
		return null;
	}


	


	@Override
	public boolean deleteProduct(String productId) {
		// TODO Auto-generated method stub
		return false;
	}
}
