package com.example.demo.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.dao.StudentRepository;
import com.example.demo.exceptionHandling.ResourceNotFoundException;
import com.example.demo.model.Student;

@Service
public class StudentService 
{
	@Autowired
	private StudentRepository studentRepository;
	
	@PostMapping(path = "/addStudents")
	 @ResponseBody
	 public Student createStudent(@Valid @RequestBody Student addStudent) {
		 System.out.println("New student added...");
		 	return studentRepository.save(addStudent);
	 }
	 
	 @GetMapping(path = "/getAllStudents")
	    @ResponseBody
	    public List<Student> getAllStudents() 
		{
		 	System.out.println("get All Students.......");
	        return studentRepository.findAll();
	    }
		

	 @GetMapping(path = "/getStudentById/{id}")
	 @ResponseBody
	 public Student getStudentById(@PathVariable(value = "id") Integer studentId) {
	     return studentRepository.findById(studentId)
	           .orElseThrow(() -> new ResourceNotFoundException("Student", "id", studentId));
	 }

	 @GetMapping(path = "/getStudentByTeacher/{teacher_id}")
	 @ResponseBody
	 public List<Student> getStudentByTeacherId(@PathVariable(value = "teacher_id") Integer teacher_Id) {
		 System.out.println("get student by teacher id...");
	      return studentRepository.findStudentByTeacherId(teacher_Id);
	 }

	 @PutMapping(path = "/updateStudent/{id}")
	 @ResponseBody
	 public Student updateStudent(@PathVariable(value = "id") Integer studentId,
	                           @Valid @RequestBody Student studentDetails) {
		 System.out.println("student upated..........");
	      Student student = studentRepository.findById(studentId)
	         .orElseThrow(() -> new ResourceNotFoundException("Student", "id", studentId));
	        student.setFirstName(studentDetails.getFirstName());
	        student.setLastName(studentDetails.getLastName());
	        student.setAddressLine1(studentDetails.getAddressLine1());
	        student.setAddressLine2(studentDetails.getAddressLine2());
	        student.setStudentClass(studentDetails.getStudentClass());
	        student.setDivision(studentDetails.getDivision());
	        student.setTeacherId(studentDetails.getTeacherId());
	        student.setPincode(studentDetails.getPincode());
	        return studentRepository.save(student);
	 }

	 @DeleteMapping(path = "/deleteStudent/{id}")
	 @ResponseBody
	 public ResponseEntity<?> deleteStudent(@PathVariable(value = "id") Integer studentId) {
		 System.out.println("student deleted.............");
	    Student student = studentRepository.findById(studentId)
	            .orElseThrow(() -> new ResourceNotFoundException("Student", "id", studentId));
	      studentRepository.delete(student);
	      return ResponseEntity.ok().build();
	 }
}
