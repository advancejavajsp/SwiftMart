package com.jspvel.swift_kart.dao;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jspvel.swift_kart.entity.User;

public interface UserRepository extends JpaRepository<User, String>{

	Optional<User> findByPhone(long phone);
	
	
	
	Optional<User> findById(String id);
	Optional<User> findByEmail(String email);

}
