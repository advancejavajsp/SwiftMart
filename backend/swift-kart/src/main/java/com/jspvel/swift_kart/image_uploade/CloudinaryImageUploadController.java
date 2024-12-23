package com.jspvel.swift_kart.image_uploade;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/open/cloudinary")
public class CloudinaryImageUploadController {
	
	@Autowired
	private CloudinaryImageService cloudinaryImageService;
	
	@PostMapping("/upload")
	public ResponseEntity<Map> uploadImage(@RequestParam("image") MultipartFile file){
		Map data = this.cloudinaryImageService.upload(file);
		return new ResponseEntity<>(data, HttpStatus.OK);
	}

}
