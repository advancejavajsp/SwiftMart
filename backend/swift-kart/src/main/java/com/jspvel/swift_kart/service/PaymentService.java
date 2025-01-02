package com.jspvel.swift_kart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dto.PaymentDTO;
import com.jspvel.swift_kart.entity.Payment;

@Service  
public interface PaymentService {

    public List<Payment> getAllPayment();
    
    public Payment getPaymentById(String paymentId);
    
    public Payment addPayment(Payment payment);
    
    public PaymentDTO updatePayment(String paymentId, PaymentDTO updatedPaymentDTO);
    
    
    public boolean deletePayment(String paymentId);
}
