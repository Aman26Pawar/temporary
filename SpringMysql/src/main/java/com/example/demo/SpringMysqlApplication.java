package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@Configuration
@SpringBootApplication
public class SpringMysqlApplication {	

	public static void main(String[] args) {
		SpringApplication.run(SpringMysqlApplication.class, args);
		System.out.println("In SpringMysqlApplication");
	}
}
