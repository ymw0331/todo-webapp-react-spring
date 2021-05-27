package com.wayneyong.rest.webservice.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
//http://localhost:4200/
public class HelloWorldController {

	// GET
	// URO - /hello-world
	// method to return hello world

	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	// hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World how are you doing waahaha?");
	}

	// hello-world-bean/path-variable/wayne
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//		throw new RuntimeException("There is an exception, something went wrong");
		return new HelloWorldBean(String.format("Hello World, %s?", name));
	}
}
