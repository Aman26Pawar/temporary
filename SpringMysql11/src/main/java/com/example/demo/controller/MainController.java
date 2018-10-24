package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Student;
import com.example.demo.Teacher;
import com.example.demo.repositoriess.StudentRepository;
import com.example.demo.repositoriess.TeacherRepository;

import ExceptionHandling.ResourceNotFoundException;

import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MainController
{
	@Autowired
	private TeacherRepository teacherRepository;
	@Autowired
	private StudentRepository studentRepository;
	
	@RequestMapping(path="/")
	public String index(){
		return "index";
	}
	
	 @PostMapping(path="/addTeacher")
	 @ResponseBody
	 public Teacher createTeacher(@RequestBody Teacher teacher) {
		 System.out.println("New Teacher Added....");
		 /*if(teacherRepository.exists(teacher.getUserName()))
		 {
			System.out.println("user with same name already exists");
		 }*/
	       return teacherRepository.save(teacher);
	 }


	@GetMapping(path = "/getAllTeachers")
	@ResponseBody
	public List<Teacher> getAllTeachers()
	{
		System.out.println("Get All Teachers.......");
		return teacherRepository.findAll();
	}
	
	@GetMapping(path="/loginTeacher/{userName}/{password}")
	@ResponseBody
	public Teacher login(@PathVariable(value = "userName") String userName, @PathVariable(value = "password") String password){
		System.out.println("Autenticating user.........");
		return teacherRepository.login(userName, password);
	}
	
	@PostMapping(path="/login")
	@ResponseBody
	public Teacher loginTeacher(@RequestBody Teacher teacherLogin){
		System.out.println(teacherLogin.getUserName() + "," + teacherLogin.getPassword());
		String loggedUser = teacherLogin.getUserName();
		String loggedPassword = teacherLogin.getPassword();
		Teacher loggedTeacher;
		System.out.println("Finding logged teacher");
		List<Teacher> teachers = teacherRepository.findAll();
		for(int i=0 ; i<teachers.size() ; i++)
		{
			System.out.println(teachers.get(i).getUserName()); 
			if(loggedUser.equals(teachers.get(i).getUserName()) && loggedPassword.equals(teachers.get(i).getPassword()) )
			{
				 loggedTeacher = getTeacherById(i+1);
				 return loggedTeacher;
			}
		}
		return null;
	}
	 @GetMapping(path = "/getTeacherById/{id}")
	 @ResponseBody
	 public Teacher getTeacherById(@PathVariable(value = "id") Integer teacherId) {
		 System.out.println("getTeacheryID");
	     return teacherRepository.findById(teacherId)
	           .orElseThrow(() -> new ResourceNotFoundException("Teacher", "id", teacherId));
	 }
	
	 @PutMapping(value = "/updateTeachers/{id}")
	 @ResponseBody
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
	 
	 @DeleteMapping(value = "/deleteTeacher/{id}")
	 @ResponseBody
	 public ResponseEntity<?> deleteTeacher(@PathVariable(value = "id") Integer teacherId) {
		 System.out.println("teacher deleted...");
	    Teacher teacher = teacherRepository.findById(teacherId)
	            .orElseThrow(() -> new ResourceNotFoundException("Teacher", "id", teacherId));
	      teacherRepository.delete(teacher);
	      return ResponseEntity.ok().build();
	 }
	 
	 
	 
	 
	 @PostMapping(path = "/addStudents")
	 @ResponseBody
	 public Student createStudent(@Valid @RequestBody Student addStudent) {
		 //System.out.println(addStudent.getFirstName());
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
