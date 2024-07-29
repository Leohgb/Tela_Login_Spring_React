package one.digitalinnovation.gof.model;

import one.digitalinnovation.gof.role.UserRole;

public record RegisterDTO(String username, String password, UserRole role) {

}
