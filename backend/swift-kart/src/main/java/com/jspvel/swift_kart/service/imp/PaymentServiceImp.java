package com.jspvel.swift_kart.service.imp;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jspvel.swift_kart.dao.PaymentRepository;
import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.dto.PaymentDTO;
import com.jspvel.swift_kart.entity.Payment;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.exception.PaymentFailedException;
import com.jspvel.swift_kart.exception.UserNotFoundException;
import com.jspvel.swift_kart.service.PaymentService;
import com.jspvel.swift_kart.util.CustomPaymentIdGenerator;
import com.jspvel.swift_kart.util.PaymentStatus;

@Service
public class PaymentServiceImp implements PaymentService {
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private CustomPaymentIdGenerator customPaymentIdGenerator;
	
	@Autowired
	private UserRepository  userRepository;

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

	public Payment makePayment(String userId, Payment payment) {
	    User user = userRepository.findById(userId).orElseThrow(()-> new UserNotFoundException(""));

        payment.setPaymentId(customPaymentIdGenerator.generateCustomId());
	    double balance = user.getBalance();
	    

	    if (balance >= payment.getAmount()) {
	        user.setBalance(balance - payment.getAmount()); 
	        userRepository.save(user);
            payment.setPaymentStatus(PaymentStatus.SUCCESS);
	        paymentRepository.save(payment); 
           payment.setTransactionId("TXN-" + UUID.randomUUID().toString());
	        return payment; 
	    } else {
	        throw new PaymentFailedException("insufficent balance"); 	    }
	}


	
}
