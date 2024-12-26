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
@Table(name = "products")
@Getter
@Setter
public class Product {

	@Id
	@Column(name = "products_id")
	private String productId;

	@Column(name = "name")
	private String name;

	@Column(name = "price")
	private double price;

	@Column(name = "quantity_available")
	private int quantityAvailable;

	@Column(name = "image_url")
	private String imageUrl;

	@Column(name = "description")
	private String description;

	@ManyToOne
	@JoinColumn
	private Category category;
}
