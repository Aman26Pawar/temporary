package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Student;



public interface StudentRepository extends JpaRepository<Student, Integer>
{
	String FIND_STUDENTS_BY_TEACHER = "SELECT * FROM studentinfo WHERE TeacherID = :teacherId";
	@Query(value = FIND_STUDENTS_BY_TEACHER, nativeQuery = true)
    List<Student> findStudentByTeacherId(@Param("teacherId") Integer teacherId);
	
	String FIND_STUDENT_BY_STUDENTID = "SELECT firstName, lastName, Standard, Division, AddressLine1, AddressLine2, PinCode FROM studentinfo WHERE StudentID = :studentId";
	@Query(value = FIND_STUDENT_BY_STUDENTID, nativeQuery = true)
    List<Student> findStudentByStudentId(Integer studentId);
	
	String ADD_STUDENT = "INSERT INTO studentinfo(firstName, lastName, TeacherId, studentClass, division, addressLine1, addressLine2, pincode) values(:fname,:lname,:tid,:studentClass,:division,:line1,:line2,:pin)";

}
