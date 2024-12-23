package com.jspvel.swift_kart.email_verification.responses;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class RegisterResponse {
    private String name;
    private String email;
}

