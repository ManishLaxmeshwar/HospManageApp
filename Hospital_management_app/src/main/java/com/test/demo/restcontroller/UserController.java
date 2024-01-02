package com.test.demo.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.demo.model.User;
//import com.test.demo.model.User;
import com.test.demo.repo.UserRepo;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200/")

public class UserController {
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userData){
		User user=userRepo.findByEmail(userData.getEmail()).get();
		if(user.getPassword().equals(userData.getPassword())&&user.getEmail().equals(userData.getEmail()))
			return ResponseEntity.ok(user);
		
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	@PostMapping("/usersignup")
	public User signupUser(@RequestBody User user) {
		System.out.println(user);
		return userRepo.save(user);
	}
	@GetMapping("/user")
	public List <User> getallUser(){
		return userRepo.findAll();
		
	}
	
}
