package com.sh.h5app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.sh"})
public class H5AppApplication {

	public static void main(String[] args) {
		SpringApplication.run(H5AppApplication.class, args);
	}
}
