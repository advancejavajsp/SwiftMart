package com.jspvel.swift_kart.dto;

import java.time.LocalDateTime;

import com.jspvel.swift_kart.util.DeliveryStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeliveryDTO {

    private String deliveryId;
    private Long orderId;
    private DeliveryStatus deliveryStatus;
    private String deliveryAddress;
    private Long assignedDeliveryPersonId;
    private LocalDateTime estimatedTime;
}
