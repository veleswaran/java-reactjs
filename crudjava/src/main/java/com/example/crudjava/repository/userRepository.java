package com.example.crudjava.repository;

import com.example.crudjava.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<Users,Integer> {
}
