package com.example.demo.repositoriess;

import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.Student;

public interface StudentRepository extends CrudRepository<Student, Integer>
{
	@Procedure(name="sp_GetStudent")
	Iterable<Student> getAllStudents();
}
