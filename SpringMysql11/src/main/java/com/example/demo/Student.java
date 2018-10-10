package com.example.demo;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student_info")
/*@NamedStoredProcedureQueries({
	@NamedStoredProcedureQuery(name="sp_GetStudent", procedureName="sp_GetStudent", resultClasses=Student.class)
})*/
public class Student implements Serializable
{
	@Id
	@GeneratedValue
	@Column(name="StudentID")
	private Integer studentId;
	
	@Column(name="firstName")
	private String firstName;
	
	@Column(name="lastName")
	private String lastName;
	
	@Column(name="teacherId")
	private Integer teacherId;
	
	@Column(name="Standard")
	private String studentClass;
	
	@Column(name="Division")
    private String division;

	@Column(name="Line1")
    private String addressLine1;
	
	@Column(name="Line2")
    private String addressLine2;
	
	@Column(name="PinCode")
    private String pincode;
	
	public Integer getstudentId() {
        return studentId;
    }

    public void setstudentId(Integer studentId) {
        this.studentId = studentId;
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

    public Integer getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Integer teacherId) {
        this.teacherId = teacherId;
    }

    public String getPINcode() {
        return pincode;
    }

    public void setPINcode(String pincode) {
        this.pincode = pincode;
    }
    public Student() 
	{
		
	}
	public Student(String firstName, String lastName, int teacherId, String studentclass, String division, 
			String address1,String address2,String pincode )
	{
		this.firstName=firstName;
		this.lastName=lastName;
		this.teacherId=teacherId;
		this.studentClass =studentclass;
		this.division=division;
		this.addressLine1=address1;
		this.addressLine2=address2;
		this.pincode=pincode;
	}
}
