package com.jspvel.swift_kart.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "OrderItem")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderItem {

    @Id
    @Column(name = "order_item_id")
    private String orderItemId;

    @Column(name = "order_id")
    private String orderId;

    @Column(name = "product_id")
    private String productId;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "price")
    private double price;
    
    @OneToOne
    private Product product;
}
