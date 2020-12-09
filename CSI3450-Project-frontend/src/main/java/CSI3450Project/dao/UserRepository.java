package CSI3450Project.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import CSI3450Project.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
