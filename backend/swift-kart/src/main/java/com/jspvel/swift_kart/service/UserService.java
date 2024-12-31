package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dto.UserDTO;
import com.jspvel.swift_kart.email_verification.requests.RegisterRequest;
import com.jspvel.swift_kart.email_verification.responses.RegisterResponse;



    
     
import com.jspvel.swift_kart.entity.User;

@Service
public interface UserService {

	
	
	UserDTO findByUserEmail(String email);
	
	public String deleteUserByEmail(String email);
	

	String sendOtpToEmail(String email);

	String updateUserDetails(String id, UserDTO userDTO);

}
