package com.jspvel.swift_kart.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.PaymentRepository;
import com.jspvel.swift_kart.entity.Payment;
import com.jspvel.swift_kart.service.PaymentService;

@Service
public class PaymentServiceImp implements PaymentService {
	
	@Autowired
	private PaymentRepository paymentRepository;

	@Override
	public List<Payment> getAllPayment() {
		return paymentRepository.findAll();
	}

	@Override
	public Payment getPaymentById(String paymentId) {
		return paymentRepository.findById(paymentId).orElse(null);
	}

	@Override
	public Payment addPayment(Payment payment) {
		return paymentRepository.save(payment);
	}

	@Override
	public Payment updatePayment(String paymentId, Payment updatedPayment) {
		Payment previousPayment = paymentRepository.findById(paymentId).orElse(null);
		
		if(previousPayment !=null) {
			
			previousPayment.setOrderId(updatedPayment.getOrderId());
			previousPayment.setPaymentDate(updatedPayment.getPaymentDate());
			previousPayment.setPaymentId(updatedPayment.getPaymentId());
			previousPayment.setPaymentMode(updatedPayment.getPaymentMode());
			previousPayment.setPaymentStatus(updatedPayment.getPaymentStatus());
			previousPayment.setTransactionId(updatedPayment.getTransactionId());
		 
			return paymentRepository.save(previousPayment);
		}
		return null;
	}

	@Override
	public boolean deletePayment(String paymentId) {
		Payment payment = paymentRepository.findById(paymentId).orElse(null);
		
		if(payment != null) {
			paymentRepository.deleteById(paymentId);
			return true;
		}
		return false;
	}

	public List<Payment> getAllPayment1() {
		// TODO Auto-generated method stub
		return null;
	}
}
