package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Value("${spring.security.cors.origins}")
    private String allowedOrigins;

    @Value("${spring.security.cors.allowed-methods}")
    private String allowedMethods;

    @Value("${spring.security.cors.allowed-headers}")
    private String allowedHeaders;

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Set allowed origins from properties
        for (String origin : allowedOrigins.split(",")) {
            config.addAllowedOrigin(origin.trim());
        }

        // Set allowed headers from properties
        for (String header : allowedHeaders.split(",")) {
            config.addAllowedHeader(header.trim());
        }

        // Set allowed methods from properties
        for (String method : allowedMethods.split(",")) {
            config.addAllowedMethod(method.trim());
        }

        // Allow credentials (cookies, authorization headers, etc.)
        config.setAllowCredentials(true);

        // Apply this configuration to all paths
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}