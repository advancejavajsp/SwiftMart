package com.jspvel.swift_kart.service.imp;

<<<<<<< HEAD
import java.util.Random;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.email_verification.requests.RegisterRequest;
import com.jspvel.swift_kart.email_verification.responses.RegisterResponse;
=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
>>>>>>> c4153b1224ed4df85c7ffb962952d25719739697
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
<<<<<<< HEAD
@RequiredArgsConstructor
public class UserServiceImp implements UserService {
  
  private final UserRepository userRepository;
  private final EmailService emailService;

  @Override
  public RegisterResponse register(RegisterRequest registerRequest) {
    Optional<User> existingUserOptional = userRepository.findByEmail(registerRequest.getEmail());

    if (existingUserOptional.isPresent() && existingUserOptional.get().isVerified()) {
      throw new RuntimeException("User Already Registered");
    }

    User user = User.builder()
      .name(registerRequest.getName())
      .email(registerRequest.getEmail())
      .password(registerRequest.getPassword())
      .build();

      String otp=generateOTP();
      user.setOtp(otp);
    User savedUser=userRepository.save(user);

    
    sendVerificationEmail(savedUser.getEmail(), otp);

    RegisterResponse response = RegisterResponse.builder()
      .name(user.getName())
      .email(user.getEmail())
      .build();

    return response;
  }

  private String generateOTP() {
    Random random = new Random();
    int otpValue = 100000 + random.nextInt(900000);
    return String.valueOf(otpValue);
  }
  private void sendVerificationEmail(String name,String otp){
    String subject ="Email verification";
    String body="your verification otp is:"+otp;
    emailService.sendEmail(email,subject,body);

  }
  @Override
  public void verify(String email, String otp) {
      Optional<User> optionalUser = userRepository.findByEmail(email);
      if (!optionalUser.isPresent()) {
          throw new RuntimeException("User not found");
      }
  
      User user = optionalUser.get(); 
      if (user.isVerified()) {
          throw new RuntimeException("User is already verified");
      }
  
      if (otp.equals(user.getOtp())) {
          user.setVerified(true);
          userRepository.save(user);
      } else {
          throw new RuntimeException("OTP is incorrect");
      }
  }
  
  
  }


=======
public class UserServiceImp implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	public UserServiceImp(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User findByUserEmail(String email) {

		return userRepository.findByEmail(email).orElseThrow();
	}

	@Override
	public String deleteUserByEmail(String email) {

		User byEmail = userRepository.findByEmail(email).orElseThrow();
		userRepository.delete(byEmail);
		;

		return "User is deleted";

	}

	@Override
	public String updateUserDetails(Long id, String newEmail, String newName, long newPhone) {
		User user = userRepository.findById(id).orElse(null);
		if (user != null) {
			user.setEmail(newEmail);
			user.setName(newName);
			user.setPhone(newPhone);

			userRepository.save(user);

			return "User Updated";
		} else {
			return "User not Found";
		}
	}

}
>>>>>>> c4153b1224ed4df85c7ffb962952d25719739697
