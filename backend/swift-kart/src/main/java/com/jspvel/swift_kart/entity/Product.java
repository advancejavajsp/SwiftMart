package com.jspvel.swift_kart.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    @Id
    @Column(name = "product_id")
    private String productId;

    @Column(name = "name")
    private String name;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "price")
    private double price;

    @Column(name = "quantity_available")
    private int quantityAvailable;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "description")
    private String description;
    
    @OneToOne
    private Category category;
}
