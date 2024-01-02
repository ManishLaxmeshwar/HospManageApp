package com.test.demo.repo;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.test.demo.model.User;
@Repository
public interface UserRepo extends JpaRepository<User, Long>{
Optional<User> findByEmail(String email);

}
