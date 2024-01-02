package com.test.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.demo.model.Patient;

@Repository

public interface PatientRepo extends JpaRepository<Patient , Integer> {


}
