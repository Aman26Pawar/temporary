package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.Table;

@Entity
@Table(name="teacher_info")

@NamedStoredProcedureQueries({
	@NamedStoredProcedureQuery( name="sp_GetTeacher",
						procedureName="sp_GetTeacher", resultClasses=Teacher.class)
})
public class Teacher 
{
	@Id 
	@GeneratedValue
	@Column(name="TeacherID")
	private int TeacherID;
	@Column(name="firstName")
	private String firstName;
	@Column(name="lastName")
	private String lastName;
	@Column(name="userName")
	private String userName;
	@Column(name="password")
	private String password;
	
	public int getTeacherID() {
		return TeacherID;
	}
	public void setTeacherID(int teacherID) {
		TeacherID = teacherID;
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
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Teacher()
	{
		
	}
	public Teacher(String firstName,String lastName,String userName,String password)
	{
		this.firstName=firstName;
		this.lastName=lastName;
		this.userName=userName;
		this.password=password;
	}

	public Teacher(int teacherID2, String firstName2, String lastName2, String userName2, String password2) {
		this.TeacherID = teacherID2;
		this.firstName = firstName2;
		this.lastName = lastName2;
		this.userName = userName2;
		this.password = password2;
	}
	 
}
