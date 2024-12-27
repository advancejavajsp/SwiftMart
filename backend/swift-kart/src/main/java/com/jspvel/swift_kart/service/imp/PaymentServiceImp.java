package com.jspvel.swift_kart.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.PaymentRepository;
import com.jspvel.swift_kart.entity.Order;
import com.jspvel.swift_kart.entity.Payment;
import com.jspvel.swift_kart.service.PaymentService;
import com.jspvel.swift_kart.util.CustomPaymentIdGenerator;

@Service
public class PaymentServiceImp implements PaymentService {
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private CustomPaymentIdGenerator customPaymentIdGenerator;

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
		String customId = customPaymentIdGenerator.generateCustomId();
        payment.setPaymentId(customId);
		return paymentRepository.save(payment);
	}

	@Override
	public Payment updatePayment(String paymentId, Payment updatedPayment) {
		Payment previousPayment = paymentRepository.findById(paymentId).orElse(null);
		
		if(previousPayment !=null) {
			
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

	
}
