package com.jspvel.swift_kart.exception;

public class PaymentFailedException extends RuntimeException {
	String message;

	public PaymentFailedException(String message) {
		super(message);
	}
	
}
