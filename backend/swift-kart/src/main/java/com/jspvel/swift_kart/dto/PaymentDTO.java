package com.jspvel.swift_kart.dto;

import java.time.LocalDateTime;

import com.jspvel.swift_kart.util.PaymentMode;
import com.jspvel.swift_kart.util.PaymentStatus;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Getter
@Setter
@Builder
public class PaymentDTO {


    private String orderId;
    private Long paymentId;


    private PaymentStatus paymentStatus;

    private PaymentMode paymentMode;

    private String transactionId;

    private LocalDateTime paymentDate;
}


