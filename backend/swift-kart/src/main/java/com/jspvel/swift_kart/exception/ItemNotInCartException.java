package com.jspvel.swift_kart.exception;

public class ItemNotInCartException extends RuntimeException {
	String message;

	public ItemNotInCartException(String message) {
		super(message);
	}
	
}
