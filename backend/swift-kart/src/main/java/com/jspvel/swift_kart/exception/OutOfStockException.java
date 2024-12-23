package com.jspvel.swift_kart.exception;

public class OutOfStockException extends RuntimeException{
	String message;

	public OutOfStockException(String message) {
		super(message);
	}
	
}
