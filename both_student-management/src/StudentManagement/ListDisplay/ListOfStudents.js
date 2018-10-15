import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import '../Buttons/Button.css'
import Button from '../Buttons/Button.js';
import EditStudent from '../Edit/EditStudent.js';
import Axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { Table } from 'react-bootstrap';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import TeacherHome from '../TeacherHome/TeacherHome';

class ListOfStudents extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleBack=this.handleBack.bind(this);
        this.state={
            students:[],
            editClicked: false,
            handleBackCalled:false,teacherId:"",
            studentToEdit:{},
            referrer:null,
            studentData:{}
        }
    }
    handleBack()
    {
        this.setState({handleBackCalled:!this.state.handleBackCalled});
    }
    componentDidMount()
    {
        this.setState({teacherId:this.props.teachers.teacherID})
        this.loadStudentsFromServer()
    }
    loadStudentsFromServer()
    {
        fetch('http://localhost:8080/getAllStudent')
        .then(res => res.json())
        .then((rows=[]) => {
          this.setState({ students: rows})
        })
    }
    handleEditClicked(student)
    {
      const id = student.studentId;
      const stid=student.teacherId;
      if(this.state.teacherId===stid)
      {
            Axios.get('http://localhost:8080/viewStudentByID?id='+id)
                 .then(res=>res)
                 .then((dataById={})=>{
            this.setState({studentToEdit:dataById})
            this.setState({referrer:'/ListOfStudents/EditStudent'})
            this.setState({studentData:this.state.studentToEdit.data});
            })
        }
        else
        alert("You can't Edit this student");
    }
    handleDeleteClicked(student)
    {  
        const id = student.studentId;
        const stid=student.teacherId;
        if(this.state.teacherId===stid)
        {
            confirmAlert(
            {
                title: 'Confirm to Delete',
                message: 'Are you sure to do this.',
                buttons: [
                {
                    label: 'Yes',
                    onClick: () => fetch('http://localhost:8080/deleteStudent?id='+id, {method:'DELETE'})
                                    .then(res=>this.loadStudentsFromServer())
                },
                {
                    label: 'No'
                }
                ]
            })
        }
        else
        alert("You can't Edit this student");
    }
    render()
    {
        const {referrer} = this.state;
        const {handleBackCalled}=this.state;
        if (referrer) 
            return (<Redirect to={referrer} />,<EditStudent studentToUpdate={this.state.studentData}/>);
        if(handleBackCalled)
            return <TeacherHome></TeacherHome>
        return(
            <div>
            <div className="List-O">
                <table >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>class</th>
                            <th>division</th>
                            <th>AddressLine1</th>
                            <th>AddressLine2</th>
                            <th>PIN Code</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        this.state.students.map((student,index)=>{
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.studentClass}</td>
                                        <td>{student.division}</td>
                                        <td>{student.addressLine1}</td>
                                        <td>{student.addressLine2}</td>
                                        <td>{student.pincode}</td>
                                        <td><Button buttonName="Edit" handleOnClick={() => this.handleEditClicked(student)}/></td>
                                        <td><Button buttonName="Delete" handleOnClick={() => this.handleDeleteClicked(student)}/></td>
                                    </tr>
                                </tbody>
                            ) 
                        })    
                    }
                </table>
               
            </div>
             <Button buttonName="Back" handleOnClick={this.handleBack}/>
             </div>    
        );
    }
}
//export default ListOfStudents;  
const mapStateToProps = (state) => {
    return{
        teachers:state.LoginReducer[0]
    }
  }
export default connect (mapStateToProps) (ListOfStudents);