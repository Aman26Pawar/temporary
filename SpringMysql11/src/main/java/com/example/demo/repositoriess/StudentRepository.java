package com.example.demo.repositoriess;

import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.Student;

public interface StudentRepository extends PagingAndSortingRepository<Student, Integer>
{
	@Procedure(name="sp_GetStudent")
	Iterable<Student> getAllStudents();
	
}
