package com.jspvel.swift_kart.exception;

public class InvalidPaymentDetailsException extends RuntimeException {
	String message;

	public InvalidPaymentDetailsException(String message) {
		super(message);
		
	}
	
	

}
