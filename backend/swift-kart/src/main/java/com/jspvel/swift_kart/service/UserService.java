package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dto.UserDTO;
import com.jspvel.swift_kart.entity.User;

@Service
public interface UserService {

	
	
	User findByUserEmail(String email);
	
	public String deleteUserByEmail(String email);
	
	String sendOtpToEmail(String email);

	String updateUserDetails(String id, UserDTO userDTO);

}
