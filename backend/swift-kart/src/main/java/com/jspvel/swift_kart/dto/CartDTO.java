package com.jspvel.swift_kart.dto;

import java.util.List;

import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.CartItem;
import com.jspvel.swift_kart.entity.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class CartDTO {

	 private String cart_id;
	    private int quantity;
	    private double price;
	    private List<CartItem> product;  // You can customize this if you need only certain attributes from Product
	    private String user_id;
		public CartDTO(Cart cart) {
			super();
			this.cart_id = cart.getCart_id();
			this.price = cart.getPrice();
			this.user_id = cart.getUser().getId();
			this.product=cart.getProduct();
			this.quantity=cart.getQuantity();
		}    
	    
		
}
