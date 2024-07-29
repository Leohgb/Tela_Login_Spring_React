package one.digitalinnovation.gof.model;

public record UserResponseDTO(Long id, String username) {
    public UserResponseDTO(User user){
        this(user.getId(), user.getUsername());
    }
}

