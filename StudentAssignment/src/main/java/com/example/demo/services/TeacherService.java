package com.example.demo.services;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.dao.TeacherRepository;
import com.example.demo.exceptionHandling.ResourceNotFoundException;
import com.example.demo.model.Teacher;



@Service("teacherService")
public class TeacherService 
{
	@Autowired
	private TeacherRepository teacherRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	public Teacher findTeacherByUserName(String userName) {
	        return teacherRepository.findByUserName(userName);
	    }
	 
	
	public Teacher saveTeacher(Teacher teacher) {
	        teacher.setPassword(bCryptPasswordEncoder.encode(teacher.getPassword()));
	        return teacherRepository.save(teacher);
	    }
	
	
	public Teacher createTeacher(@RequestBody Teacher teacher) {
		 System.out.println("New Teacher Added....");
	       return teacherRepository.save(teacher);
	 }
	 
	public List<Teacher> getAllTeachers()
	{
		System.out.println("Get All Teachers.......");
		return teacherRepository.findAll();
	}
	
	
	public Teacher getTeacherById(@PathVariable(value = "id") Integer teacherId) {
	     return teacherRepository.findById(teacherId)
	           .orElseThrow(() -> new ResourceNotFoundException("Teacher", "id", teacherId));
	 }
	
	
	public Teacher updateTeacher(@PathVariable(value = "id") Integer teacherId,
	                           @Valid @RequestBody Teacher teacherDetails) {
		 System.out.println("teacher updated.........");
	      Teacher teacher = teacherRepository.findById(teacherId)
	         .orElseThrow(() -> new ResourceNotFoundException("Teacher", "id", teacherId));
	        teacher.setFirstName(teacherDetails.getFirstName());
	        teacher.setLastName(teacherDetails.getLastName());
	        teacher.setUserName(teacherDetails.getUserName());
	        teacher.setPassword(teacherDetails.getPassword());
	        return teacherRepository.save(teacher);
	 }
	 
	
	public ResponseEntity<?> deleteTeacher(@PathVariable(value = "id") Integer teacherId) {
		 System.out.println("teacher deleted...");
	    Teacher teacher = teacherRepository.findById(teacherId)
	            .orElseThrow(() -> new ResourceNotFoundException("Teacher", "id", teacherId));
	      teacherRepository.delete(teacher);
	      return ResponseEntity.ok().build();
	 }

}
