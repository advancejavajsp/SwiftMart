package com.jspvel.swift_kart.exception;

public class ServiceUnavailableException extends RuntimeException {
	String message;

	public ServiceUnavailableException(String message) {
		super(message);
	}
	
}
