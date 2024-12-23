package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.email_verification.requests.RegisterRequest;
import com.jspvel.swift_kart.email_verification.responses.RegisterResponse;


public interface UserService {

	 RegisterResponse register(RegisterRequest registerRequest);

     

}
