package com.example.demo;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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
	private int StudentId;
	@Column(name="FirstName")
	private String firstName;
	@Column(name="LastName")
	private String lastName;
	@Column(name="TeacherID")
	private int TeacherId;
	@Column(name="Standard")
	private String studentClass;
	@Column(name="Division")
	private String division;
	@Column(name="AddressLine1")
	private String addressLine1;
	@Column(name="AddressLine2")
	private String addressLine2;
	@Column(name="PinCode")
	private int pincode;
	
	//private @Version @JsonIgnore int version;
	//private @ManyToOne Teacher teacher;
	
	public Student() 
	{
		
	}
	public Student(String firstName2, String lastName2, int teacherID2, String classs2, String division, String line12,
			String line22)
	{
		this.firstName=firstName2;
		this.lastName=lastName2;
		this.TeacherId=teacherID2;
		this.studentClass =classs2;
		this.division=division;
		this.addressLine1=line12;
		this.addressLine2=line22;
	}
	public int getStudentId() {
		return StudentId;
	}
	public void setStudentId(int studentId) {
		StudentId = studentId;
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
	public int getTeacherId() {
		return TeacherId;
	}
	public void setTeacherId(int teacherId) {
		TeacherId = teacherId;
	}
	public String getStudentClass() {
		return studentClass;
	}
	public void setStudentClass(String studentClass) {
		this.studentClass = studentClass;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getAddressLine1() {
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	public String getAddressLine2() {
		return addressLine2;
	}
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
}
