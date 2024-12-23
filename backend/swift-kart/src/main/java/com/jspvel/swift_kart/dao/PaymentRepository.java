package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
	

}
