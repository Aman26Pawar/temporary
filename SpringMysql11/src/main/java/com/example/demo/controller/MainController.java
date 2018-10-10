package com.example.demo.controller;

import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.demo.Student;
import com.example.demo.Teacher;
import com.example.demo.repositoriess.StudentRepository;
import com.example.demo.repositoriess.TeacherRepository;

@Controller
public class MainController 
{
	@Autowired
	private TeacherRepository teacherRepository;
	@Autowired
	private StudentRepository studentRepository;
	
	@RequestMapping(path="/")
	public String index(Model model)
	{
		model.addAttribute("title", "Welcome");
		System.out.println("Index");
		return "index.html";
	}
	
	@PostMapping(path="/addTeacher")
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
		System.out.println("entered teacher is valid..");
		return teacherRepository.findAll();
	}
	
	@GetMapping(path="/viewTeacherByID")
	@ResponseBody
	public  Optional<Teacher> getTeacherById(int id) 
	{
		System.out.println("entered teacher is valid..");
		return teacherRepository.findById(id);
	}
	
	@PostMapping(path="/deleteTeacher")
	@ResponseBody
	public String deleteTeacherById(int id)
	{
		System.out.println("request to delete a student....");
		teacherRepository.deleteById(id);
		return "Teacher at id "+ id+ " is deleted";
	}

	@PostMapping(path="/addStudent")
	@ResponseBody
	public String addNewStudent(@RequestParam String firstName, @RequestParam String lastName,@RequestParam int TeacherID,@RequestParam String classs, @RequestParam String division,
			               @RequestParam String line1, @RequestParam String line2,@RequestParam String pinCode)
	{
		System.out.println("New Student Added....");
		Student addStudent= new Student();
		addStudent.setFirstName(firstName);
		addStudent.setLastName(lastName);
		addStudent.setTeacherId(TeacherID);
		addStudent.setStudentClass(classs);
		addStudent.setDivision(division);
		addStudent.setAddressLine1(line1);
		addStudent.setAddressLine2(line2);
		addStudent.setPINcode(pinCode);
		studentRepository.save(addStudent);
		return "Student Added..........";
	}
	
	@GetMapping(path="/getAllStudent")
	@ResponseBody
	public  Iterable<Student> getAllStudents() {
		System.out.println("request from react to get student's list");
		return studentRepository.findAll();
	}
	
	@GetMapping(path="/viewStudentByID")
	@ResponseBody
	public  Optional<Student> getAllStudentById(int id)
	{
		return studentRepository.findById(id);
	}
	
	@PostMapping(path="/deleteStudent")
	@ResponseBody
	public String deleteStudentById(@RequestParam int id)
	{
		System.out.println("request to delete a student....");
		studentRepository.deleteById(id);
		return "Student at id "+ id+ " is deleted";
	}
	
	@PostMapping(path="/updateStudent/{StudentID}")
	public String updateStudent(@PathVariable(value = "StudentID") int id, @Valid @RequestBody Student student)
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
		updateStudent.setstudentId(student.getstudentId());
		updateStudent.setFirstName(student.getFirstName());
		updateStudent.setLastName(student.getLastName());
		updateStudent.setTeacherId(student.getTeacherId());
		updateStudent.setStudentClass(student.getStudentClass());
		updateStudent.setDivision(student.getDivision());
		updateStudent.setAddressLine1(student.getAddressLine1());
		updateStudent.setAddressLine2(student.getAddressLine2());
		updateStudent.setPINcode(student.getPINcode());
		studentRepository.save(updateStudent);
		}
		return "Student updated......";
	}
	
	@PostMapping(path="/updateStudent")
	public String updateStudent(@RequestParam int id,@RequestParam String firstName, @RequestParam String lastName,
			@RequestParam int TeacherID,@RequestParam String classs,@RequestParam String division,@RequestParam String line1,
			@RequestParam String line2,@RequestParam String pinCode)
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
		updateStudent.setstudentId(id);
		updateStudent.setFirstName(firstName);
		updateStudent.setLastName(lastName);
		updateStudent.setTeacherId(TeacherID);
		updateStudent.setStudentClass(classs);
		updateStudent.setDivision(division);
		updateStudent.setAddressLine1(line1);
		updateStudent.setAddressLine2(line2);
		updateStudent.setPINcode(pinCode);
		studentRepository.save(updateStudent);
		}
		return "Student updated......";
	}
}
