package com.jspvel.swift_kart.exception;

public class UserNotFoundException extends RuntimeException {
	String message;

	public UserNotFoundException(String message) {
		super(message);
	}
	
}
