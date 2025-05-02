package org.iesvdm.starterspringbootkeycloak.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@CrossOrigin("http://localhost:4200")
@RequestMapping("demo")
@RestController
public class DemoController {

    @GetMapping("/data")
    public ResponseEntity<?> prueba() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        log.info(authentication.toString());
        return new ResponseEntity<>("{\"prueba\": \"ok\"}", HttpStatus.OK);

    }

    @PostMapping("/data")
    public ResponseEntity<Map<?,?>> prueba2(@RequestBody Map<String, String> mapReq) {

        log.info(mapReq.toString());

        Map<String, String> mapResp = new HashMap<>();
        mapResp.put("prueba", "ok");

        return new ResponseEntity<>(mapResp, HttpStatus.OK);

    }

}
