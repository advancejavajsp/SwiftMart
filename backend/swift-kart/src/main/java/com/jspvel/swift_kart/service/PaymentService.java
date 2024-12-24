package com.jspvel.swift_kart.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.Payment;

@Service
public interface PaymentService {

	public List<Payment> getAllPayment();
	
	public Payment getPaymentById(String  paymentId);
	
	public Payment addPayment(Payment payment);
	
	public Payment updatePayment(String paymentId, Payment updatedPayment);
	
	public boolean deletePayment(String paymentId);
}
