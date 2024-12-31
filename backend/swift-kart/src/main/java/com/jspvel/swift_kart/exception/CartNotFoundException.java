package com.jspvel.swift_kart.exception;

public class CartNotFoundException extends RuntimeException {
	
	private String message;
	
	
	 public  CartNotFoundException(String message) {
		super(message);
	}

}
