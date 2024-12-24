package com.jspvel.swift_kart.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDTO {

    private String orderId;

    @NotNull(message = "User ID cannot be null")
    private Long userId;

    @NotNull(message = "Order status cannot be null")
    private String orderStatus;

    @Positive(message = "Total amount must be positive")
    private Double totalAmount;

    private LocalDateTime createdAt;

    private LocalDateTime deliveredAt;
}
