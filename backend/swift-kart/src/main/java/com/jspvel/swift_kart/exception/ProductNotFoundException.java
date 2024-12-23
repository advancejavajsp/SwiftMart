package com.jspvel.swift_kart.exception;

public class ProductNotFoundException extends RuntimeException{
	String message;

	public ProductNotFoundException(String message) {
		super(message);
	}
	
}
