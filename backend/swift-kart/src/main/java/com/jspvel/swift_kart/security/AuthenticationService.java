package com.jspvel.swift_kart.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.entity.Address;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.image_uploade.CloudinaryImageUploadController;
import com.jspvel.swift_kart.util.CustomIdGenerator;
import com.jspvel.swift_kart.util.Role;

@Service
public class AuthenticationService {
	private final UserRepository userRepository;

	private final PasswordEncoder passwordEncoder;

	private final AuthenticationManager authenticationManager;

	@Autowired
	CustomIdGenerator customIdGenerator;

	@Autowired
	CloudinaryImageUploadController cloudinaryImageUploadController;

	public AuthenticationService(UserRepository userRepository, AuthenticationManager authenticationManager,
			PasswordEncoder passwordEncoder) {
		this.authenticationManager = authenticationManager;
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public User signup(User user) throws Exception{

		user.setRole(Role.USER);
		user.setId(customIdGenerator.generateCustomId());
		user.setPassword("USER"+ passwordEncoder.encode(user.getPassword()));
		List<Address> addresses = user.getAddresses().stream().peek(add -> add.setUser(user))
				.peek(add -> add.setId(user.getId() + customIdGenerator.generateCustomIdAddress())).toList();
		user.setAddresses(addresses);

//		ResponseEntity<Map> uploadImage = cloudinaryImageUploadController.uploadImage(user.getPhoto());
//		String url=uploadImage.getBody().get("secured_url").toString();
//        user.setImage(url);

		return userRepository.save(user);
	}

	public User authenticate(String email, String password) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));

		return userRepository.findByEmail(email).orElseThrow();
	}

	public User signupDeliveryAgent(User user) {
		user.setRole(Role.DELIVERY_AGENT);
		user.setId("DELIVERY_AGENT"+customIdGenerator.generateCustomId());
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		return userRepository.save(user);

	}

	public User signupAdmin(User user) {
		user.setRole(Role.ADMIN);
		user.setId("ADMIN"+customIdGenerator.generateCustomId());
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		return userRepository.save(user);

	}

}
