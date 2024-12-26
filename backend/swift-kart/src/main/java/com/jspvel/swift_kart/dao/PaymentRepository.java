package com.jspvel.swift_kart.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String> {
	
	Optional<Payment> findById(String id);

}
