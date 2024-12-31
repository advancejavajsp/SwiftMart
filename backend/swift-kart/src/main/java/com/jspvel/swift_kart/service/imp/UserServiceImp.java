package com.jspvel.swift_kart.service.imp;

import java.util.Random;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.dto.UserDTO;
import com.jspvel.swift_kart.email_verification.EmailService;
import com.jspvel.swift_kart.email_verification.requests.RegisterRequest;
import com.jspvel.swift_kart.email_verification.responses.RegisterResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;

import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.UserService;

import lombok.RequiredArgsConstructor;




 

//  @Override
//  public RegisterResponse register(RegisterRequest registerRequest) {
//    Optional<User> existingUserOptional = userRepository.findByEmail(registerRequest.getEmail());
//
//    if (existingUserOptional.isPresent() && existingUserOptional.get().isVerified()) {
//      throw new RuntimeException("User Already Registered");
//    }
//
//    User user = User.builder()
//      .name(registerRequest.getName())
//      .email(registerRequest.getEmail())
//      .password(registerRequest.getPassword())
//      .build();
//
//      String otp=generateOTP();
//      user.setOtp(otp);
//    User savedUser=userRepository.save(user);
//
//    
//    sendVerificationEmail(savedUser.getEmail(), otp);
//
//    RegisterResponse response = RegisterResponse.builder()
//      .name(user.getName())
//      .email(user.getEmail())
//      .build();
//
//    return response;
//  }

//  private String generateOTP() {
//    Random random = new Random();
//    int otpValue = 100000 + random.nextInt(900000);
//    return String.valueOf(otpValue);
//  }
//  private void sendVerificationEmail(String name,String otp){
//    String subject ="Email verification";
//    String body="your verification otp is:"+otp;
//    emailService.sendEmail(email,subject,body);
//
//  }
//  @Override
//  public void verify(String email, String otp) {
//      Optional<User> optionalUser = userRepository.findByEmail(email);
//      if (!optionalUser.isPresent()) {
//          throw new RuntimeException("User not found");
//      }
//  
//      User user = optionalUser.get(); 
//      if (user.isVerified()) {
//          throw new RuntimeException("User is already verified");
//      }
//  
//      if (otp.equals(user.getOtp())) {
//          user.setVerified(true);
//          userRepository.save(user);
//      } else {
//          throw new RuntimeException("OTP is incorrect");
//      }
//  }
//  
//  
//  }


@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

	private int balance; 

    @Autowired
    public UserServiceImp(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    @Override
    public UserDTO findByUserEmail(String email) {
       
        	User user=	userRepository.findByEmail(email).orElseThrow();
        		UserDTO userDTO=new UserDTO(user);
        		 return userDTO;
    }

    @Override
    public String deleteUserByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();
        userRepository.delete(user);
        return "User is deleted";
    }

    @Override
    public String updateUserDetails(String id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setEmail(userDTO.getEmail());
            user.setName(userDTO.getName());
            user.setPhone(userDTO.getPhone());
            userRepository.save(user);
            return "User Updated";
        } else {
            return "User not Found";
        }
    }

    @Override
    public String sendOtpToEmail(String email) {

        String otp = generateOtp();

        
        String subject = "Your OTP Code";
        String body = "Your OTP code is: " + otp;
        emailService.sendEmail(email, subject, body);
        return otp;
    }


    private String generateOtp() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

	public String checkBalance(String id) {
		if (this.balance < 0) {
            return "Invalid Balance";  
        } else {
            return "Payment Successful";  
        }
	}

	
}