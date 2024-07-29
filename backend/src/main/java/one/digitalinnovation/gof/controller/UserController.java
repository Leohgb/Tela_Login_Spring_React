package one.digitalinnovation.gof.controller;

import one.digitalinnovation.gof.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    UserRepository repository;

  @GetMapping("/users")
    public ResponseEntity getAllUsers() {
      List<UserResponseDTO> userList = this.repository.findAll().stream().map(UserResponseDTO::new).toList();

        return ResponseEntity.ok(userList);
    }
}
