package com.jspvel.swift_kart.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.jspvel.swift_kart.util.PaymentMode;
import com.jspvel.swift_kart.util.PaymentStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "payments")
@Getter
@Setter
public class Payment {

	@Id
	@Column(name = "payment_id")
	private String paymentId;

	@Enumerated(EnumType.STRING)
	@Column(name = "payment_status")
	private PaymentStatus paymentStatus;

	@Enumerated(EnumType.STRING)
	@Column(name = "payment_mode")
	private PaymentMode paymentMode;

	@Column(name = "transaction_id")
	private String transactionId;

	@CreationTimestamp
	@Column(name = "payment_date")
	private LocalDateTime paymentDate;

	@OneToOne
	private Order order;
}
