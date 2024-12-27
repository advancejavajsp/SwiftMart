package com.jspvel.swift_kart.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "products")
@Getter
@Setter
@Data
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

	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn
	private Category category;

<<<<<<< HEAD
	
=======
>>>>>>> 438e71d41da12a9c7aec7cf0934598ae50204fa6
}
