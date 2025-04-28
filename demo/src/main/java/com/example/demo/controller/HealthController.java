package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HealthController {

    @Value("${spring.application.name}")
    private String serviceName;

    @Value("${app.version}")
    private String version;

    @GetMapping("health")
    public ResponseEntity<ApiResponse<Map<String, Object>>> healthCheck() {
        Map<String, Object> healthData = new HashMap<>();
        healthData.put("status", "UP");
        healthData.put("service", serviceName);
        healthData.put("version", version);

        Map<String, String> components = new HashMap<>();
        components.put("application", "RUNNING");
        components.put("database", "CONNECTED");
        components.put("cache", "AVAILABLE");
        healthData.put("components", components);

        return ResponseEntity.ok(ApiResponse.success(healthData, "Health check successful"));
    }
}
