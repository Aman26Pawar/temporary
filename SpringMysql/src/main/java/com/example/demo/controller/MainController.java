package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Student;
import com.example.demo.Teacher;
import com.example.demo.repositoriess.StudentRepository;
import com.example.demo.repositoriess.TeacherRepository;

import ch.qos.logback.core.net.SyslogOutputStream;

@Controller
public class MainController 
{
	@Autowired
	private TeacherRepository teacherRepository;
	@Autowired
	private StudentRepository studentRepository;
	
	@RequestMapping(path="/")
	public String index(){
		System.out.println("Index");
		return "index.html";
	}
	
	@GetMapping(path="/addTeacher")
	@ResponseBody
	public String addNewTeacher(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String userName, @RequestParam String password)
	{
		//System.out.println("Request from  react....");
		System.out.println("new teacher added....");
		Teacher addTeacher = new Teacher();
		addTeacher.setFirstName(firstName);
		addTeacher.setLastName(lastName);
		addTeacher.setUserName(userName);
		addTeacher.setPassword(password);
		teacherRepository.save(addTeacher);
		
		return "Teacher added..........";
		
	}
	@GetMapping(path="/viewTeacher")
	@ResponseBody
	public  Iterable<Teacher> getAllTeachers() 
	{
		System.out.println("see newly added teacher..");
		return teacherRepository.findAll();
	}
	
	@GetMapping(path="/addStudent")
	@ResponseBody
	public String addNewStudent(@RequestParam String firstName, @RequestParam String lastName,@RequestParam int TeacherID,@RequestParam String classs, @RequestParam String division,@RequestParam String line1, @RequestParam String line2,@RequestParam int pinCode)
	{
		System.out.println("In add student....");
		Student addStudent= new Student();
		addStudent.setFirstName(firstName);
		addStudent.setLastName(lastName);
		addStudent.setTeacherID(TeacherID);
		addStudent.setClasss(classs);
		addStudent.setDivv(division);
		addStudent.setLine1(line1);
		addStudent.setLine2(line2);
		addStudent.setPin(pinCode);
		studentRepository.save(addStudent);
		return "Student Added..........";
	}
	
	@GetMapping(path="/getAllStudent")
	@ResponseBody
	public  Iterable<Student> getAllStudents() {
		System.out.println("request from react to get student's list");
		return studentRepository.findAll();
	}
	
	/*@PostMapping(path="/postAllStudent")
	@ResponseBody
	public  Iterable<Student> posAllStudents() {
		System.out.println("response to react for student list");
		return  studentRepository.findAll();
	}*/
	
	/*@RequestMapping(value="/getAllStudent", method=RequestMethod.GET)
	public ResponseEntity<List<Student>> getAllStudents(){
		Iterable<Student> students = studentRepository.sp_GetStudent();
		List<Student> target = new ArrayList<>();
		students.forEach(target::add);
		return new ResponseEntity<>(target,HttpStatus.OK);
	}*/
	
	
	
	@GetMapping(path="/viewStudentByID")
	@ResponseBody
	public  Optional<Student> getAllStudentById(int id)
	{
		return studentRepository.findById(id);
	}
	
	/*@GetMapping(path="/viewStudentss")
	@ResponseBody
	public void getStudents(){
		studentRepository.getAllStudents();
	}*/
	
	
	@PostMapping(path="/deleteStudent")
	@ResponseBody
	public String deleteStudentById(int id)
	{
		System.out.println("request to delete a student....");
		studentRepository.deleteById(id);
		return "Student at id "+ id+ " is deleted";
	}
	
	
	@GetMapping(path="/updateStudent")
	public String updateStudent(@RequestBody Student student, @RequestParam int id)
	//public String updateStudent(@RequestParam int id,@RequestParam String firstName, @RequestParam String lastName,@RequestParam String classs, @RequestParam String division,@RequestParam String line1, @RequestParam String line2,@RequestParam int pinCode)
	{
		String notFound =ResponseEntity.notFound().build().toString();
		System.out.println("updating student....");
		Student updateStudent = new Student();
		Optional<Student> studentOptional = studentRepository.findById(id);
		if (!studentOptional.isPresent())
		{
			return notFound;
		}
		else{
		studentRepository.findById(id);
		updateStudent.setStudentID(id);
		/*updateStudent.setFirstName(firstName);
		updateStudent.setLastName(lastName);
		updateStudent.setClasss(classs);
		updateStudent.setDivv(division);
		updateStudent.setLine1(line1);
		updateStudent.setLine2(line2);
		updateStudent.setPin(pinCode);*/
		studentRepository.save(updateStudent);
		}
		return "Student updated......";
	}
	
}
