package com.example.demo.repo;
import org.springframework.data. jpa. repository. JpaRepository;

import com.example.demo.entity.Employees;

public interface EmployeeRepo extends JpaRepository<Employees, Integer>
{
	
}