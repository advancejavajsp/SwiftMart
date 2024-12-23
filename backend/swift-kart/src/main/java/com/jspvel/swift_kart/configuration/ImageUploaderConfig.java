package com.jspvel.swift_kart.configuration;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;

@Configuration
public class ImageUploaderConfig {
	
	@Bean
	public Cloudinary getClaudinary() {
		Map config = new HashMap();
		config.put("cloud_name","dmjyzajqz");
		config.put("api_key", "161456148962846");
		config.put("api_secret", "XtNd6iqVVrDvXukVtkaKj3BIVSw");;
		return new Cloudinary(config);
	}
	

}
