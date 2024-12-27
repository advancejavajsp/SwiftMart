package com.jspvel.swift_kart.dto;

import java.util.List;

import com.jspvel.swift_kart.entity.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartDTO {

	 private String cart_id;
	    private int quantity;
	    private double price;
	    private List<ProductDTO> product;  // You can customize this if you need only certain attributes from Product
	    private String user_id;    
}
