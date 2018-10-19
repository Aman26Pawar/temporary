package com.example.demo.repositoriess;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Integer>
{
	
}
