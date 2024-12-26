package com.jspvel.swift_kart.dto;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.jspvel.swift_kart.util.PaymentMode;
import com.jspvel.swift_kart.util.PaymentStatus;


@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentDTO {


    @Id
    private Long paymentId;

    private Long orderId;

    private PaymentStatus paymentStatus;

    private PaymentMode paymentMode;

    private String transactionId;

    private LocalDateTime paymentDate;
}


