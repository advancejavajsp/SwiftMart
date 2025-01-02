package com.jspvel.swift_kart.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.PaymentRepository;
import com.jspvel.swift_kart.dto.PaymentDTO;
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

		String generatedId = customPaymentIdGenerator.generateCustomId();
        payment.setPaymentId(generatedId);

		return paymentRepository.save(payment);
	}

	@Override
	public PaymentDTO updatePayment(String paymentId, PaymentDTO updatedPaymentDTO) {
	    Payment previousPayment = paymentRepository.findById(paymentId).orElse(null);

	    if (previousPayment != null) {
	        previousPayment.setPaymentMode(updatedPaymentDTO.getPaymentMode());
	        previousPayment.setPaymentStatus(updatedPaymentDTO.getPaymentStatus());

	        Payment updatedPayment = paymentRepository.save(previousPayment);

	        PaymentDTO updatedPaymentDTOResponse = PaymentDTO.builder()
	                .paymentStatus(updatedPayment.getPaymentStatus())
	                .paymentMode(updatedPayment.getPaymentMode())
	                .build();

	        return updatedPaymentDTOResponse;
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
