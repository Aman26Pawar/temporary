package com.example.demo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.Table;




@Entity
@Table(name="studentinfo")
/*@NamedStoredProcedureQueries({
	@NamedStoredProcedureQuery(name="sp_GetStudent", procedureName="sp_GetStudent", resultClasses=Student.class)
})*/
public class Student implements Serializable
{
	@Id
	@GeneratedValue
	@Column(name="StudentID")
	private int StudentID;
	@Column(name="firstName")
	private String firstName;
	@Column(name="lastName")
	private String lastName;
	@Column(name="TeacherID")
	private int TeacherID;
	@Column(name="Standard")
	private String classs;
	@Column(name="Division")
	private String divv;
	@Column(name="Line1")
	private String line1;
	@Column(name="Line2")
	private String line2;
	@Column(name="PinCode")
	private int pin;
	
	public int getStudentID() {
		return StudentID;
	}
	public void setStudentID(int studentID) {
		StudentID = studentID;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getTeacherID() {
		return TeacherID;
	}
	public void setTeacherID(int teacherID) {
		TeacherID = teacherID;
	}
	public String getClasss() {
		return classs;
	}
	public void setClasss(String classs) {
		this.classs = classs;
	}
	public String getDivv() {
		return divv;
	}
	public void setDivv(String divv) {
		this.divv = divv;
	}
	public String getLine1() {
		return line1;
	}
	public void setLine1(String line1) {
		this.line1 = line1;
	}
	public String getLine2() {
		return line2;
	}
	public void setLine2(String line2) {
		this.line2 = line2;
	}
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
	
	public Student() 
	{
		
	}
}
