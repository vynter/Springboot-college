package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Myapplication {
	@GetMapping("/display")
	public String show() {
		return "Welcome";
		
	}
	
	
	@RequestMapping(value="/favCol/{color}", method=RequestMethod.GET)
	public String getColor(@PathVariable String color) {
		return "My favourite color is "+ color;
	}
	
	@RequestMapping(value="/name/{name}", method=RequestMethod.GET)
	public String getName(@PathVariable String name) {
		return "My name is "+ name;
	}
	
	
}


