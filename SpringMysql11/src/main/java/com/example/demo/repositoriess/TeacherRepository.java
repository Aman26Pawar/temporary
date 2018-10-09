package com.example.demo.repositoriess;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.example.demo.Teacher;

public interface TeacherRepository extends PagingAndSortingRepository<Teacher, Integer>
{
	
}
