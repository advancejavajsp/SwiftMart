package com.jspvel.swift_kart.dto;

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

	
	private PaymentStatus paymentStatus;

	private PaymentMode paymentMode;


}
