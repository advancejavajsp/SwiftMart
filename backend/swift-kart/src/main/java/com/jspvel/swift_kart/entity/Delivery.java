package com.jspvel.swift_kart.entity;

import java.time.LocalDateTime;

import com.jspvel.swift_kart.util.DeliveryStatus;
import com.jspvel.swift_kart.util.OrderStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Delivery")
@Getter
@Setter
public class Delivery {

	@Id
	@Column(name = "delivery_id")
	private String deliveryId;

	@Column(name = "order_ids")
	private String orderIds;

	@Enumerated(EnumType.STRING)
	@Column(name = "delivery_status")
	private DeliveryStatus deliveryStatus;

	@Column(name = "delivery_address")
	private String deliveryAddress;


	@Column(name = "estimated_time")
	private LocalDateTime estimatedTime;

	@ManyToOne
	@JoinColumn
	private User deliveryAgentId;
}
