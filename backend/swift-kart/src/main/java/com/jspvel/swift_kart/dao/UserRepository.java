package com.jspvel.swift_kart.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByEmail(String username);

}
