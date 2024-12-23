package com.jspvel.swift_kart.entity;

import java.time.LocalDateTime;

import com.jspvel.swift_kart.util.DeliveryStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Delivery")
@NoArgsConstructor
@Data
public class Delivery {
	

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_id")
    private String deliveryId;

    @Column(name = "order_id")
    private Long orderId;

    @Enumerated(EnumType.STRING)
    @Column(name = "delivery_status")
    private DeliveryStatus deliveryStatus;

    @Column(name = "delivery_address")
    private String deliveryAddress;

    @Column(name = "assigned_delivery_person_id")
    private String assignedDeliveryPersonId;

    @Column(name = "estimated_time")
    private LocalDateTime estimatedTime;
}
