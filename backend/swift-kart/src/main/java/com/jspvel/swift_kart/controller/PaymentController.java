package com.jspvel.swift_kart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.entity.Payment;
import com.jspvel.swift_kart.entity.Product;
import com.jspvel.swift_kart.service.PaymentService;
import com.jspvel.swift_kart.service.imp.PaymentServiceImp;
import com.jspvel.swift_kart.service.imp.ProductServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/open/swiftmart")
public class PaymentController {
	@Autowired
	private PaymentServiceImp paymentServiceImp; 
	
	@GetMapping("/payments")
	public List<Payment> getAllPayments(){
		return paymentServiceImp.getAllPayment();
	}
	
	@GetMapping("/payments/{paymentId}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable String  paymentId){
		Payment payment = paymentServiceImp.getPaymentById(paymentId);
		if (payment != null) {
            return ResponseEntity.ok(payment);
        } else {
            return ResponseEntity.notFound().build();
        }
	}
	
	@PostMapping("/payments")
	public ResponseEntity<Payment> addPayment(@RequestBody Payment payment){

		return new ResponseEntity<>(paymentServiceImp.addPayment(payment), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/payments/{paymentId}")
	public ResponseEntity<Void> deletePayment(@PathVariable String paymentId){
		boolean deleted = paymentServiceImp.deletePayment(paymentId);
        if (deleted) {
            return ResponseEntity.noContent().build(); // 204 No Content, means deleted successfully
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found, if product not found
        }
	}
	
	@PutMapping("/payments/{paymenttId}")
	public ResponseEntity<Payment> updatePayment(@PathVariable ("paymentId") String paymentId, @RequestBody Payment updatedPayment){
		Payment updated = paymentServiceImp.updatePayment(paymentId, updatedPayment);
		
		if(updated != null) {
			return ResponseEntity.ok(updated);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
}