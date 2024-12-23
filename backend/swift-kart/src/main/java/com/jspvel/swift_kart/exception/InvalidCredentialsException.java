package com.jspvel.swift_kart.exception;

public class InvalidCredentialsException extends RuntimeException {
	private String message;
	
	
	 public InvalidCredentialsException(String message) {
		super(message);
	}


	
}
