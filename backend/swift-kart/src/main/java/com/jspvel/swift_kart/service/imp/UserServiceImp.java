package com.jspvel.swift_kart.service.imp;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.dto.UserDTO;
import com.jspvel.swift_kart.email_verification.EmailService;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.UserService;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EmailService emailService;

	@Autowired
	public UserServiceImp(UserRepository userRepository, EmailService emailService) {
		this.userRepository = userRepository;
		this.emailService = emailService;
	}

	@Override
	public User findByUserEmail(String email) {
		return userRepository.findByEmail(email).orElseThrow();
	}

	@Override
	public String deleteUserByEmail(String email) {
		User user = userRepository.findByEmail(email).orElseThrow();
		userRepository.delete(user);
		return "User is deleted";
	}

	@Override
	public String updateUserDetails(String id, UserDTO userDTO) {
		User user = userRepository.findById(id).orElse(null);
		if (user != null) {
			user.setEmail(userDTO.getEmail());
			user.setName(userDTO.getName());
			user.setPhone(userDTO.getPhone());
			userRepository.save(user);
			return "User Updated";
		} else {
			return "User not Found";
		}
	}

	@Override
	public String sendOtpToEmail(String email) {

		String otp = generateOtp();

		String subject = "Your OTP Code";
		String body = "Your OTP code is: " + otp;
		emailService.sendEmail(email, subject, body);
		return otp;
	}

	private String generateOtp() {
		Random random = new Random();
		int otp = 100000 + random.nextInt(900000);
		return String.valueOf(otp);
	}
}