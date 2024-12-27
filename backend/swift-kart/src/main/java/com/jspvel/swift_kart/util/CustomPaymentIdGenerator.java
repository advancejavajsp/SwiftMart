package com.jspvel.swift_kart.util;

import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Component
public class CustomPaymentIdGenerator {

	private static final String PREFIX ="PAY";
   	
   	@PersistenceContext
   	private EntityManager entityManager;
   	
   	@Transactional
    public String generateCustomId() {
        Long nextVal = ((Number) entityManager
                .createNativeQuery("SELECT nextval('pay_sequence')")
                .getSingleResult()).longValue();

        return PREFIX + String.format("%04d", nextVal);
    }
}
