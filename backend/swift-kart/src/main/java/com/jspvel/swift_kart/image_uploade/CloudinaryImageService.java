package com.jspvel.swift_kart.image_uploade;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface CloudinaryImageService {

	public Map upload(MultipartFile file);
}
