package com.jspvel.swift_kart.util;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {

	private String token;

	private long expiresIn;

}
