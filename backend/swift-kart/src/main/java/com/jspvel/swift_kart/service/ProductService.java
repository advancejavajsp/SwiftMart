package com.jspvel.swift_kart.service;

import com.jspvel.swift_kart.entity.Product;

public interface ProductService {
    Product findProductById(String productId);
    String deleteProductById(String productId);
    String updateProductDetails(String productId, String name, Long categoryId, double price, int quantityAvailable, String imageUrl, String description);
}
