package com.jspvel.swift_kart.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "order_item")
@Getter
@Setter
public class OrderItem {

	@Id
	@Column(name = "order_item_id")
	private String orderItemId;

	@Column(name = "product_id")
	private String productId;

	@Column(name = "quantity")
	private int quantity;

	@Column(name = "price")
	private double price;

	@ManyToOne
	@JoinColumn
	private Order order;
}
