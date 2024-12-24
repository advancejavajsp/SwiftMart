package com.jspvel.swift_kart.service.imp;

import com.jspvel.swift_kart.dao.ProductRepository;
import com.jspvel.swift_kart.entity.Product;
import com.jspvel.swift_kart.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImp implements ProductService {

    @Autowired
    private ProductRepository productRepository;

   

    
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
            product.setCategoryId(categoryId);
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

	public Product addProduct(String productId) {
		
		return null;
	}


	public Product updateProduct(String productId, Product updatedProduct) {
		
		return null;
	}
}
