package com.jspvel.swift_kart.email_verification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

	private JavaMailSender javaMailSender;
	@Autowired
	 public EmailService(JavaMailSender javaMailSender) {
	        this.javaMailSender = javaMailSender;
	    }

	    public void sendEmail(String to,String subject,String body) {

	        try {
	            MimeMessage message = javaMailSender.createMimeMessage();
	            MimeMessageHelper helper = new MimeMessageHelper(message,true);
	            helper.setTo(to);
	            helper.setSubject(subject);
	            helper.setText(body,true);
	            javaMailSender.send(message);
	        } catch (MessagingException e) {
	            e.printStackTrace();
	            e.getMessage();
	            throw new RuntimeException(e);
	        }

	    }
	
}
