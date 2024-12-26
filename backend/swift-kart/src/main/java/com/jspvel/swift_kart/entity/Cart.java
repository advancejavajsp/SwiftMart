package com.jspvel.swift_kart.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "cart")
@Getter
@Setter
public class Cart {

	@Id
	@Column(name = "cart")
	private String cart_id;


	@Column(name = "quantity")
	private int quantity;

	@Column(name = "price")
	private double price;

	@OneToMany
	private List<Product> product;
	
}
