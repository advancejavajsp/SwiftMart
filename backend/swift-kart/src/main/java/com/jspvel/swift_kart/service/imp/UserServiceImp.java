package com.jspvel.swift_kart.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.UserService;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	public UserServiceImp(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User findByUserEmail(String email) {

		return userRepository.findByEmail(email).orElseThrow();
	}

	@Override
	public String deleteUserByEmail(String email) {

		User byEmail = userRepository.findByEmail(email).orElseThrow();
		userRepository.delete(byEmail);
		;

		return "User is deleted";

	}

	@Override
	public String updateUserDetails(String id, String newEmail, String newName, long newPhone) {
		User user = userRepository.findById(id).orElse(null);
		if (user != null) {
			user.setEmail(newEmail);
			user.setName(newName);
			user.setPhone(newPhone);

			userRepository.save(user);

			return "User Updated";
		} else {
			return "User not Found";
		}
	}

}
