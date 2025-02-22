package com.jspvel.swift_kart.util;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseStructure<T> {

	private int status_code;
	private String message;
	private T data;
}
