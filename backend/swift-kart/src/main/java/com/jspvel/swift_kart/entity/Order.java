package com.jspvel.swift_kart.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import com.jspvel.swift_kart.util.OrderStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "orders")
@Getter
@Setter
public class Order {

	@Id
	@Column(name = "order_id")
	private String orderId;

	

	@Enumerated(EnumType.STRING)
	@Column(name = "order_status")
	private OrderStatus orderStatus;

	@Column(name = "total_amount")
	private Double totalAmount;

	@CreationTimestamp
	@Column(name = "created_at")
	private LocalDateTime createdAt;

	@Column(name = "delivered_at")
	private LocalDateTime deliveredAt;

	@OneToOne
	private Delivery delivery;

	@OneToOne(mappedBy = "order")
	private Payment payment;

	@OneToMany(mappedBy = "order")
	private List<OrderItem> orderItem;

	@ManyToOne
	@JoinColumn
	private User customer_id;
}
